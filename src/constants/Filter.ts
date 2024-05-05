import { Currency } from '../types/Ticket'

export const CurrencyOptions = [
  {
    label: Currency.RUB,
    value: Currency.RUB,
  },
  {
    label: Currency.EUR,
    value: Currency.EUR,
  },
  {
    label: Currency.USD,
    value: Currency.USD,
  },
]

export const TransferCountsOptions = [
  {
    label: 'Без пересадок',
    value: 0,
  },
  {
    label: '1 пересадка',
    value: 1,
  },
  {
    label: '2 пересадоки',
    value: 2,
  },
  {
    label: '3 пересадоки',
    value: 3,
  },
]
