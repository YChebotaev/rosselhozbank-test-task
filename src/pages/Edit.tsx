import { Container } from 'reactstrap'
import { EditElement } from '../components/EditElement'
import { FC } from 'react'
import { itemsSelector } from '../store/selectors/itemsSelector'
import { useSelector } from 'react-redux'

export const Edit: FC<{}> = () => {
  const items = useSelector(itemsSelector)

  return (
    <Container>
      {items.map((item, index) => {
        return <EditElement key={item.id} index={index} {...item} />
      })}
    </Container>
  )
}
