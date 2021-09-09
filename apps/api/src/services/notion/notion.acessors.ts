import { PropertyValueMap } from '@notionhq/client/build/src/api-endpoints'
import {
  CheckboxPropertyValue,
  DatePropertyValue,
  LastEditedTimePropertyValue,
  MultiSelectPropertyValue,
  SelectPropertyValue,
  TitlePropertyValue,
  URLPropertyValue,
} from '@notionhq/client/build/src/api-types'

export const notionPropertyAccessor = <T>(propertyName: string, properties: PropertyValueMap, type: string): T | null => {
  const block = properties[propertyName]

  if (typeof block !== 'object') {
    return null
  }

  if (block.type !== type) {
    throw new Error(`Date '${type}' was expected, instead got a block with type of '${block.type}'`)
  }
  return block as unknown as T
}

export const titlePropertyAccessor = (propertyName: string, properties: PropertyValueMap): TitlePropertyValue | null => {
  return notionPropertyAccessor<TitlePropertyValue>(propertyName, properties, 'title')
}

export const datePropertyAccessor = (propertyName: string, properties: PropertyValueMap): DatePropertyValue | null => {
  return notionPropertyAccessor<DatePropertyValue>(propertyName, properties, 'date')
}

export const lastEditedTimePropertyAccessor = (propertyName: string, properties: PropertyValueMap): LastEditedTimePropertyValue | null => {
  return notionPropertyAccessor<LastEditedTimePropertyValue>(propertyName, properties, 'last_edited_time')
}

export const selectPropertyAccessor = (propertyName: string, properties: PropertyValueMap): SelectPropertyValue | null => {
  return notionPropertyAccessor<SelectPropertyValue>(propertyName, properties, 'select')
}

export const multiSelectPropertyAccessor = (propertyName: string, properties: PropertyValueMap): MultiSelectPropertyValue | null => {
  return notionPropertyAccessor<MultiSelectPropertyValue>(propertyName, properties, 'multi_select')
}

export const urlPropertyAccessor = (propertyName: string, properties: PropertyValueMap): URLPropertyValue | null => {
  return notionPropertyAccessor<URLPropertyValue>(propertyName, properties, 'url')
}

export const checkboxPropertyAccessor = (propertyName: string, properties: PropertyValueMap): boolean => {
  return notionPropertyAccessor<CheckboxPropertyValue>(propertyName, properties, 'checkbox')?.checkbox === true
}
