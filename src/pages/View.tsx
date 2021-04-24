import { Container } from 'reactstrap'
import { FC } from 'react'
import { ViewElement } from '../components/ViewElement'
import { itemsSelector } from '../store/selectors/itemsSelector'
import { useSelector } from 'react-redux'

export const View: FC<{}> = () => {
  const items = useSelector(itemsSelector)

  return (
    <Container>
      {items.map((item, index) => {
        return <ViewElement key={item.id} index={index} {...item} />
      })}
    </Container>
  )
}
