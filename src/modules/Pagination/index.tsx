import React from 'react'

import { Pagination as PaginationAnt } from 'antd'

import styles from './pagination.module.scss'

type Props = {
    page: number,
    pageSize: number,
    total: number
    onChange?: (page: number, pageSize: number) => void
}

const Pagination: React.FC<Props> = ({
  page,
  pageSize,
  total,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <PaginationAnt
        showSizeChanger
        current={page}
        total={total}
        locale={{ items_per_page: '/ страницу' }}
        pageSizeOptions={[5, 10, 20, 50]}
        pageSize={pageSize}
        onChange={onChange}
      />
    </div>
  )
}

export default Pagination
