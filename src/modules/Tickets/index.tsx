import React from 'react'

import styles from '@app/modules/Tickets/tickets.module.scss'
import { Currency, TicketsType as TicketsType } from '@app/types/Ticket'

import Pagination from '../Pagination'
import Ticket from './Ticket'

type TicketsPropsType = {
    tickets?: TicketsType
    page: number,
    pageSize: number,
    total: number,
    onChange?: (page: number, pageSize: number) => void
    currency: Currency
}

const Tickets: React.FC<TicketsPropsType> = ({
  tickets,
  page,
  pageSize,
  total,
  onChange,
  currency,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tickets}>
        {tickets?.map((item, index) => {
          return (
            <Ticket
              currency={currency}
              key={index}
              ticket={item}
            />
          )
        })}
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
      />
    </div>
  )
}

export default Tickets

