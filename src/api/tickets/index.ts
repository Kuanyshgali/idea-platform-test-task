import request from 'src/api/request'

import { TicketApiDataType, TicketsQueryType } from '@app/types/Ticket'

enum Params {
  TRANSFERS_COUNT = 'transfersCount',
  CURRENCY = 'currency',
  PAGE = 'page',
  PAGE_SIZE = 'pageSize',
}

const getTickets = async ({
  transfersCount,
  currency,
  page,
  pageSize,
}: TicketsQueryType): Promise<TicketApiDataType> => {
  const params = new URLSearchParams()

  transfersCount && params.append(Params.TRANSFERS_COUNT, String(transfersCount))
  currency && params.append(Params.CURRENCY, String(currency))
  page && params.append(Params.PAGE, String(page))
  pageSize && params.append(Params.PAGE_SIZE, String(pageSize))

  return request()
    .get(`/api/tickets?${params.toString()}`)
    .then((resp) => resp.data)
}

export default getTickets
