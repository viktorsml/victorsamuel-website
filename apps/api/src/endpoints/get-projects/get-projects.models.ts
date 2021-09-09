export interface IProjectDates {
  published?: string
  updated?: string
}

export interface IProjectUrls {
  repository?: string
  landingPage?: string
}

export interface IProjectItem {
  id: string
  projectName?: string
  role?: string
  stack?: (string | undefined)[]
  date?: IProjectDates
  urls?: IProjectUrls
}
