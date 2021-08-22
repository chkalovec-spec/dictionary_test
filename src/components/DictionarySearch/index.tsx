import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

type DictionarySearchProps = {
  onSearchHandler: (query: string) => void
}

export const DictionarySearch: React.FC<DictionarySearchProps> = ({ onSearchHandler }) => {
  const [searchValue, setSearchValue] = useState('')
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <InputGroup className='w-50'>
        <FormControl
          placeholder='Введите название справочника'
          value={searchValue}
          onChange={onChangeHandler}
        />
        <Button variant='outline-secondary' onClick={() => onSearchHandler(searchValue)}>
          Найти
        </Button>
      </InputGroup>
    </>
  )
}
