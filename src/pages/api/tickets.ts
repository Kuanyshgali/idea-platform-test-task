import { NextApiRequest, NextApiResponse } from 'next'

import { Currency, TicketApiDataType, TicketsQueryType,TicketsType  } from '@app/types/Ticket'

import { getExchangeRate } from './common/exchangeRate'
import { paginate } from './common/paginate'
import { ticketsData } from './data/ticketsData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TicketApiDataType>
) {
  if (req.method === 'GET') {
    let ticketsDataCopy: TicketsType = JSON.parse(JSON.stringify(ticketsData.tickets))
    const query: TicketsQueryType = req.query
    const page = query?.page ?? 1
    const pageSize = query?.pageSize ?? 10

    if (query?.transfersCount) {
      ticketsDataCopy = ticketsDataCopy.filter(ticket => query.transfersCount?.includes(ticket.stops))
    }

    if (query?.currency) {
      switch(query.currency) {
      case Currency.USD:
        const rateUSD = await getExchangeRate(Currency.USD)

        ticketsDataCopy = ticketsDataCopy.map(ticket => {
          return {
            ...ticket,
            price: Math.trunc(ticket.price / rateUSD),
          }
        })

        break
      case Currency.EUR:
        const rateEUR = await getExchangeRate(Currency.EUR)

        ticketsDataCopy = ticketsDataCopy.map(ticket => {
          return {
            ...ticket,
            price: Math.trunc(ticket.price * rateEUR),
          }
        })

        break
      default:
        break
      }
    }

    res.status(200).json(paginate(ticketsDataCopy, { page: Number(page), pageSize: Number(pageSize) }))
  }
}
