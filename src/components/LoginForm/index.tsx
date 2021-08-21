import React, { SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Alert, Button, Form } from 'react-bootstrap'

import { useAuth } from '../../hooks/useAuth'

export const LoginForm = () => {
  const history = useHistory()
  const {logIn} = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthSuccess, setIsAuthSuccess] = useState(true)

  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault()
    const isAuthSuccess = logIn({username,password})
    if (isAuthSuccess) {
      history.push('/dictionary')
    } else {
      setIsAuthSuccess(false)
    }

  }

  const onInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'username' | 'password'
  ) => {
    if (field === 'username') setUsername(e.target.value)
    if (field === 'password') setPassword(e.target.value)
  }

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Логин</Form.Label>
          <Form.Control
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onInputHandler(e, 'username')
            }
            autoComplete='new-password'
            type='text'
            placeholder='Введите логин'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onInputHandler(e, 'password')
            }
            autoComplete='new-password'
            type='password'
            placeholder='Введите пароль'
          />
        </Form.Group>

        {!isAuthSuccess && <Alert variant='danger'>
          Имя пользователя или пароль введены не верно
        </Alert>}

        <Button variant='primary' type='submit'>
          Войти
        </Button>
      </Form>
    </>
  )
}
