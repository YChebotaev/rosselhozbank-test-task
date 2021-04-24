import { FormGroup, Input, Label } from 'reactstrap'

import { FC } from 'react'

export const TextareaEdit: FC<{
  value?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ value, label, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type="textarea" value={value} onChange={onChange} />
    </FormGroup>
  )
}
