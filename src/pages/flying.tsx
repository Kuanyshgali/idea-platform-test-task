import React from 'react'

import { NextPage } from 'next'

import getTickets from '@app/api/tickets'
import Flying from '@app/modules/Flying'
import { TicketApiDataType } from '@app/types/Ticket'

type FlyingPagePropsType = {
  tickets: TicketApiDataType
}

const FlyingPage: NextPage<FlyingPagePropsType> = ({ tickets }) => {
  return (
    <Flying ticketsData={tickets} />
  )
}

export const getServerSideProps = async () => {
  const tickets = await getTickets({})

  return {
    props: { tickets },
  }
}

export default FlyingPage
