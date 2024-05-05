import React from 'react'

import { Button as AntdButton } from 'antd'
import cx from 'classnames'

import { ButtonType } from '@app/types/Button'

import styles from './button.module.scss'

type ButtonPropsType = {
    className?: string
    type?: ButtonType
}

const Button: React.FC<React.PropsWithChildren<ButtonPropsType>> = ({
  children,
  className,
  type,
}) => {

  return (
    <AntdButton
      className={
        cx(
          className,
          { [styles.buyTicket]: type === ButtonType?.BUY_TICKET }
        )
      }
    >
      {children}
    </AntdButton>
  )
}

export default Button
