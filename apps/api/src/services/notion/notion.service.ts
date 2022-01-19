import { Client } from '@notionhq/client'
import { settings } from '@settings/environment'

export const notion = new Client({
  auth: settings.notionToken,
})
