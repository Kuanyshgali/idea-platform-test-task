import React, { useEffect, useMemo } from 'react'

import { Checkbox, Form, Radio, Typography } from 'antd'

import { CurrencyOptions, TransferCountsOptions } from '@app/constants/Filter'
import styles from '@app/modules/Filter/filter.module.scss'
import { FilterFormType } from '@app/types/Filter'
import { Currency } from '@app/types/Ticket'

const { Title } = Typography

type FilterPropsType = {
    onChangeForm: (values: FilterFormType) => void
}

const Filter: React.FC<FilterPropsType> = ({
  onChangeForm,
}) => {
  const [form] = Form.useForm<FilterFormType>()

  const values = Form.useWatch([], form)

  useEffect(() => {
    if (form.isFieldsTouched()) {
      onChangeForm(values)
    }
  }, [values])

  const isAllTransfersCountChecked = useMemo(() => {
    return values?.transfersCount?.length === TransferCountsOptions.length
  }, [values?.transfersCount])

  return (
    <div className={styles.container}>
      <Form
        name={'ticketsFilter'}
        form={form}
      >
        <Title
          level={5}
        >
            Валюта
        </Title>
        <Form.Item
          name={'currency'}
          initialValue={Currency.RUB}
        >
          <Radio.Group
            value={values?.currency}
            optionType="button"
            onChange={(event) => form.setFields([{ name: 'currency', touched: true, value: event.target?.value }])}
          >
            {CurrencyOptions.map((option, index) => {
              return (
                <Radio
                  key={index}
                  value={option.value}
                >
                  {option.label}
                </Radio>
              )
            })}
          </Radio.Group>
        </Form.Item>

        <Title
          level={5}
        >
            Количество пересадок
        </Title>

        <Form.Item
          name={'transfersCount'}
        >
          <Checkbox
            checked={isAllTransfersCountChecked}
            onChange={(event) => {
              form.setFields([{
                name: 'transfersCount',
                touched: true,
                value: event.target.checked
                  ? TransferCountsOptions.map(options => options.value)
                  : undefined,
              }])
            }}
          >
            Все
          </Checkbox>
          <Checkbox.Group
            rootClassName={styles.checkboxGroup}
            value={values?.transfersCount}
            onChange={(value) =>
              form.setFields([{
                name: 'transfersCount',
                touched: true,
                value: !!value.length ? value : undefined,
              }])
            }
          >
            {TransferCountsOptions.map((option, index) => {
              return (
                <Checkbox
                  key={index}
                  value={option.value}
                >
                  {option.label}
                </Checkbox>
              )
            })}
          </Checkbox.Group>
        </Form.Item>

      </Form>
    </div>
  )
}

export default Filter
