import { Card, ListGroup } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

import { Dictionary } from '../../database'

type DictionaryListProps = {
  dictionaries: Dictionary[]
  onDeleteHandler: (id: string) => void
}

export const DictionaryList: React.FC<DictionaryListProps> = ({
  dictionaries,
  onDeleteHandler,
}) => {
  return (
    <>
      <ListGroup as='ul'>
        {dictionaries.map(({ id, title, description }) => {
          return (
            <Card key={id} as='li' className='my-1'>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Trash size={30} className='trash-icon' onClick={() => onDeleteHandler(id)} />
              </Card.Body>
            </Card>
          )
        })}
      </ListGroup>
    </>
  )
}
