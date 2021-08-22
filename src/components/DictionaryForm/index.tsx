import { useState } from 'react'
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap'

type DictionaryFormProps = {
  handleClose: () => void
  handleSave: ({ title, description }: { title: string; description: string }) => void
}

export const DictionaryForm: React.FC<DictionaryFormProps> = ({ handleClose, handleSave }) => {
  const [title, setTitle] = useState('')
  const [isTitleInvalid, setIsTitleInvalid] = useState(false)

  const [description, setDescription] = useState('')
  const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(false)

  const onInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'title' | 'description',
  ) => {
    if (field === 'title') setTitle(e.target.value)
    if (field === 'description') setDescription(e.target.value)
  }

  const onSaveHandler = () => {
    if (!title) setIsTitleInvalid(true)
    if (!description) setIsDescriptionInvalid(true)

    if (title && description) {
      setIsTitleInvalid(false)
      setIsDescriptionInvalid(false)
      handleSave({
        title,
        description,
      })
    }
  }

  return (
    <>
      <Modal show onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Добавить справочник</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Название справочника</Form.Label>
          <InputGroup hasValidation className='mb-3'>
            <FormControl
              placeholder='Введите название'
              required
              isInvalid={isTitleInvalid}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputHandler(e, 'title')}
            />
            <Form.Control.Feedback type='invalid'>Обязательное поле</Form.Control.Feedback>
          </InputGroup>
          <Form.Label>Описание справочника</Form.Label>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Введите описание'
              required
              isInvalid={isDescriptionInvalid}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onInputHandler(e, 'description')
              }
            />
            <Form.Control.Feedback type='invalid'>Обязательное поле</Form.Control.Feedback>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Отменить
          </Button>
          <Button variant='primary' onClick={onSaveHandler}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
