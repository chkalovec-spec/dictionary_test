import { nanoid } from '@reduxjs/toolkit'

export type Dictionary = {
  id: string
  title: string
  description: string
}

export const getDictionaries = (): Dictionary[] => {
  const result: Dictionary[] = new Array(10000)

  for (let i = 0; i < result.length; i++) {
    result[i] = {
      id: nanoid(),
      title: `Справочник ${i + 1}`,
      description: `Описание справочника ${i + 1}`,
    }
  }

  return result
}
