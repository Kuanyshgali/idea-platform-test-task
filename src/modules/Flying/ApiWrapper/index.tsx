import React, { useRef } from 'react'

import getTickets from '@app/api/tickets'
import useDidMountEffect from '@app/hooks/useDidMountEffect'
import { TicketsQueryType,TicketsType } from '@app/types/Ticket'

type ApiWrapperPropsType = {
    query?: TicketsQueryType
    setTickets: React.Dispatch<React.SetStateAction<TicketsType>>
    setTotal: React.Dispatch<React.SetStateAction<number>>
    setPage: React.Dispatch<React.SetStateAction<number>>
    setPageSize: React.Dispatch<React.SetStateAction<number>>
}

const ApiWrapper: React.FC<React.PropsWithChildren<ApiWrapperPropsType>> = ({
  children,
  query,
  setTickets,
  setTotal,
  setPage,
  setPageSize,
}) => {
  const timerRefTickets = useRef<NodeJS.Timeout>()

  useDidMountEffect(() => {
    if (query) {
      clearTimeout(timerRefTickets.current)

      timerRefTickets.current = setTimeout(() => {
        getTickets(query).then(
          (response) => {
            setTickets(response.data)
            setTotal(response.total)
            setPage(response?.page)
            setPageSize(response?.pageSize)
          }
        )
      }, 100)
    }
  }, [query])

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default ApiWrapper
