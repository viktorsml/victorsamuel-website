interface SmartImageReference {
  webp: string,
  jpg: string,
}

interface ProjectInformation {
  about: string[],
  challenges?: string[],
  technology?: string[],
  frontEnd?: string[],
  backEnd?: string[],
  result?: string[],
}

interface Project {
  title: string,
  description: string,
  website?: string,
  code?: string,
  headerImage: SmartImageReference,
  information: ProjectInformation,
  gallery?: SmartImageReference[]
}

export const projects: Project[] = [
  {
    title: 'Hotel Posada de Roger',
    description: `Modernización del sitio web del hotel junto con un sistema de reservaciones personalizado`,
    website: 'https://dev.hotelposadaderoger.com',
    code: 'https://github.com/viktorsml/hpr-website',
    headerImage: {
      jpg: 'https://picsum.photos/1140/647?random=1',
      webp: 'https://picsum.photos/1140/647?random=1'
    },
    information: {
      about: [
        `Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go
        Desktop app is a React web application build on top of the Electron framework.`,
        `At this project I acted as the lead UI/UX developer specialist being the bridge
        between UI/UX Design, PO and the UI development team. The main challenge was to
        reorganize the UI structure from a react-virtualized grid into a pure CSS one.
        Which improved drastically the scalability and maintainability of the project.`
      ],
      
    },
    gallery: [
      {
        jpg: 'https://picsum.photos/1140/647?random=2',
        webp: 'https://picsum.photos/1140/647?random=2'
      },
      {
        jpg: 'https://picsum.photos/1140/647?random=3',
        webp: 'https://picsum.photos/1140/647?random=3'
      },
      {
        jpg: 'https://picsum.photos/1140/647?random=4',
        webp: 'https://picsum.photos/1140/647?random=4'
      },
      {
        jpg: 'https://picsum.photos/1140/647?random=5',
        webp: 'https://picsum.photos/1140/647?random=5'
      },
    ]
  }
];
