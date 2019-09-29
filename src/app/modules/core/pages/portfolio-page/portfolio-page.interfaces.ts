export interface PictureSource {
  webp ? : string,
  bmp ? : string,
  jpg ? : string,
  png ? : string,
  gif ? : string
}

export interface ProjectTag {
  id: string,
  displayText: string
}

export interface Project {
  projectId: string,
  title: string,
  description: string,
  pictureSource: PictureSource,
  tags: ProjectTag[],
  codeUrl ? : string,
}