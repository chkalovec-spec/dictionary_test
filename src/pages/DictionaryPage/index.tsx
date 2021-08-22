import { useState } from 'react'
import { Button } from 'react-bootstrap'

import { DictionaryList } from '../../components/DictionaryList'
import { DictionaryForm } from '../../components/DictionaryForm'
import { DictionarySearch } from '../../components/DictionarySearch'

import { useDictionaries } from '../../hooks/useDictionaries'

export const DictionaryPage = () => {
  const { dictionaries, deleteDictionary, addDictionary, searchDictionary } = useDictionaries()

  const [isShowDictForm, setIsShowDictForm] = useState(false)

  const toggleDictForm = () => {
    setIsShowDictForm(!isShowDictForm)
  }

  return (
    <>
      <h3 className='mb-4'>Список справочников: </h3>
      <div className='mb-2 d-flex align-items-center justify-content-between'>
        <DictionarySearch onSearchHandler={searchDictionary} />
        <Button variant='outline-secondary' onClick={toggleDictForm}>
          Добавить
        </Button>
      </div>
      <DictionaryList dictionaries={dictionaries} onDeleteHandler={deleteDictionary} />
      {isShowDictForm && <DictionaryForm handleClose={toggleDictForm} handleSave={addDictionary} />}
    </>
  )
}
