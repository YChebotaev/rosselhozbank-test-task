import { FormGroup, Input, Label } from 'reactstrap'
import React, { FC } from 'react'

export const DateEdit: FC<{
  value?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ value, label, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type="datetime-local" value={value} onChange={onChange} />
    </FormGroup>
  )
}
