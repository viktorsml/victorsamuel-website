export interface IProject {
  title: string
  shortDescription: string
  headerImageUrl: string
  projectDetails: IProjectDetails
  aboutTheProject: string[]
}

export interface IProjectDetails {
  projectType: string
  myRole: string
  stack: string
}
