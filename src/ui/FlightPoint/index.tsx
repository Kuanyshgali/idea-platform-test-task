import React from 'react'

import styles from './flightPoint.module.scss'

type Props = {
    time: string,
    date: string,
    city: string
}

const FlightPoint: React.FC<Props> = ({
  time,
  date,
  city,
}) => {

  return (
    <div className={styles.container} >
      <div className={styles.time}>
        {time}
      </div>
      <div className={styles.info}>
        <div className={styles.city}>
          {city}
        </div>
        <div className={styles.date}>
          {date}
        </div>
      </div>
    </div>
  )
}

export default FlightPoint
