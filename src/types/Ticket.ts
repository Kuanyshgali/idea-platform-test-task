export type TicketType = {
    origin: string,
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    carrier: string,
    stops: number,
    price: number
}

export type TicketsType = TicketType[]

export type PaginationType<T> = {
    data: T
    page: number
    pageSize: number
    total: number
  }

export type TicketApiDataType = PaginationType<TicketsType>

export type TicketMockType = {tickets: TicketsType}

export enum Currency {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',
}

export type TicketsQueryType = {
    transfersCount?: number[]
    page?: number
    pageSize?: number
    currency?: Currency
}
