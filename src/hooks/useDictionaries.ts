import { useCallback, useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

import throttle from 'lodash/throttle'

import { Dictionary, getDictionaries } from '../database'

const initialCountDictionaries = 10
const initialDictionaries = getDictionaries()

export const useDictionaries = () => {
  const [dictionaries, setDictionaries] = useState<Dictionary[]>(initialDictionaries)
  const [displayedDictionaries, setDisplayedDictionaries] = useState<Dictionary[]>([])
  const [countDictionaries, setCountDictionaries] = useState(initialCountDictionaries)

  useEffect(() => {
    setDisplayedDictionaries([...dictionaries.slice(0, countDictionaries)])
  }, [dictionaries, countDictionaries])

  useEffect(() => {
    const onscrollHandler = throttle(() => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement
      if (scrollTop === scrollHeight - clientHeight) {
        setCountDictionaries((prevCount) => (prevCount += initialCountDictionaries))
      }
    }, 300)
    document.addEventListener('scroll', onscrollHandler)
    return () => {
      document.removeEventListener('scroll', onscrollHandler)
    }
  })

  const deleteDictionary = useCallback(
    (id: string) => {
      setDictionaries([...dictionaries.filter((d) => d.id !== id)])
    },
    [dictionaries],
  )

  const addDictionary = useCallback(
    ({ title, description }: { title: string; description: string }) => {
      setDictionaries((prevState) => [{ id: nanoid(), title, description }, ...prevState])
    },
    [],
  )

  const searchDictionary = useCallback(
    (query: string) => {
      if (query) {
        setDictionaries([
          ...dictionaries.filter((d) => d.title.toLowerCase().includes(query.toLowerCase())),
        ])
      } else {
        setDictionaries(dictionaries)
      }
    },
    [dictionaries],
  )

  return {
    dictionaries: displayedDictionaries,
    deleteDictionary,
    addDictionary,
    searchDictionary,
  }
}
