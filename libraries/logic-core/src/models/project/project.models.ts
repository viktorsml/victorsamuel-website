export interface IProjectDates {
  published?: string;
  updated?: string;
}

export interface IProjectUrls {
  repository?: string;
  landingPage?: string;
}

export interface IProjectItem {
  id: string;
  urlSlug?: string;
  projectName?: string;
  role?: string;
  stack?: (string | undefined)[];
  date?: IProjectDates;
  urls?: IProjectUrls;
  shortDescription?: string;
  gridImageUrl?: string;
}

export interface IProject {
  title: string;
  shortDescription: string;
  headerImageUrl: string;
  projectDetails: IProjectDetails;
  aboutTheProject: string[];
}

export interface IProjectDetails {
  projectType: string;
  myRole: string;
  stack: string;
}
