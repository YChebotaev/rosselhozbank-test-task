import { FormGroup, Input, Label } from 'reactstrap'

import { FC } from 'react'

export const TextEdit: FC<{
  value?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ value, label, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={onChange} />
    </FormGroup>
  )
}
