import { format, parseISO } from 'date-fns'

import { FC } from 'react'

export const DateView: FC<{
  value?: string
  label?: string
}> = ({ label, value }) => {
  return <div><span>{label}</span>: <span>{value && format(parseISO(value), 'yyyy-MM-dd hh:mm a')}</span></div>
}
