import "./TextareaView.css"

import { FC } from 'react'

export const TextareaView: FC<{
  value?: string
  label?: string
}> = ({ label, value }) => {
  return (
    <div>
      <div>{label}</div>
      <div className="TextareaView__value">{value}</div>
    </div>
  )
}
