import { useState } from 'react'

import { FilterFormType } from '@app/types/Filter'
import { Currency, TicketApiDataType, TicketsQueryType,TicketsType as TicketsType } from '@app/types/Ticket'

import Filter from '../Filter'
import Tickets from '../Tickets'
import ApiWrapper from './ApiWrapper'
import styles from './flying.module.scss'

type FlyingPropsType = {
  ticketsData: TicketApiDataType
}


const Flying: React.FC<FlyingPropsType> = ({ ticketsData }) => {
  const [query, setQuery] = useState<TicketsQueryType>()
  const [total, setTotal] = useState<number>(ticketsData?.total)
  const [page, setPage] = useState(ticketsData?.page)
  const [pageSize, setPageSize] = useState(ticketsData?.pageSize)
  const [tickets, setTickets] = useState<TicketsType>(ticketsData?.data)

  const onChangeForm = (values: FilterFormType) => {
    setQuery({ ...values })
  }

  const onChangePagination = (page: number, pageSize: number) => {
    setPage(page)
    setPageSize(pageSize)

    setQuery(prevState => {
      return { ...prevState, page, pageSize }
    })
  }

  return (
    <div className={styles.container}>
      <ApiWrapper
        query={query}
        setTickets={setTickets}
        setTotal={setTotal}
        setPage={setPage}
        setPageSize={setPageSize}
      >
        <Filter onChangeForm={onChangeForm} />
        <Tickets
          page={page}
          pageSize={pageSize}
          currency={query?.currency ?? Currency?.RUB}
          total={total}
          tickets={tickets}
          onChange={onChangePagination}
        />

      </ApiWrapper>
    </div>
  )
}

export default Flying
