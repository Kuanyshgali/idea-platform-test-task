import React from 'react'

import 'moment/locale/ru'
import moment from 'moment'

import { CurrencySign } from '@app/constants/Ticket'
import AirplaneIcon from '@app/icons/airplane-icon.svg'
import AirLogo from '@app/icons/turkish_logo.svg'
import { ButtonType } from '@app/types/Button'
import { Currency, TicketType } from '@app/types/Ticket'
import Button from '@app/ui/Button'
import FlightPoint from '@app/ui/FlightPoint'

import styles from './ticket.module.scss'

type Props = {
    ticket: TicketType
    currency: Currency
}

const Ticket: React.FC<Props> = ({
  ticket,
  currency,
}) => {

  return (
    <div className={styles.container} >
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <AirLogo />
        </div>
        <Button
          type={ButtonType.BUY_TICKET}
        >
          Купить
          <br />
          за {`${ticket.price} ${CurrencySign[currency]}`}
        </Button>
      </div>
      <div className={styles.rightSide}>
        <FlightPoint
          date={moment(ticket.departure_date).format('D MMM YYYY, ddd')}
          time={ticket.departure_time}
          city={`${ticket.origin}, ${ticket.origin_name}`}
        />
        <div className={styles.airplaneLine}>
          <div className={styles.airplaneIcon}>
            <AirplaneIcon />
          </div>

        </div>
        <FlightPoint
          date={moment(ticket.arrival_date).format('D MMM YYYY, ddd')}
          time={ticket.arrival_time}
          city={`${ticket.destination}, ${ticket.destination_name}`}
        />
      </div>
    </div>
  )
}

export default Ticket
