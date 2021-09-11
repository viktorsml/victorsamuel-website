import { RichText } from '@notionhq/client/build/src/api-types';

export const returnJson = <T>(payload: T): string => {
  return JSON.stringify(payload, null, 2)
}

export const extractPlainText = (richText?: RichText[]): string | undefined => {
  if (!richText) {
    return undefined
  }
  const plainTexts = richText.map((rt) => rt.plain_text)

  if (plainTexts.length <= 0) {
    return undefined
  }

  return plainTexts.reduce((acc, curr) => `${acc} ${curr}`)
}
