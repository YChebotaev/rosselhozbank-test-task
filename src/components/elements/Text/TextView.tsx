import { FC } from 'react'

export const TextView: FC<{
  value?: string
  label?: string
}> = ({ label, value }) => {
  return <div><span>{label}</span>: <span>{value}</span></div>
}
