import { Currency } from '@app/types/Ticket'

import { API_KEY_EXCHANGE_RATE } from './constants'
import request from './request'

export async function getExchangeRate(toCurrency: Currency): Promise<number> {
  const apiUrl = 'https://openexchangerates.org/api'

  const params = new URLSearchParams()

  params.append('app_id', API_KEY_EXCHANGE_RATE)

  return request(apiUrl)
    .get(`/latest.json?${params.toString()}`)
    .then((resp) => {
      if (toCurrency === Currency.USD) {
        return resp.data.rates[Currency.RUB]
      }

      if (toCurrency === Currency.EUR) {
        return resp.data.rates[Currency.EUR] / resp.data.rates[Currency.RUB]
      }
    })
}
