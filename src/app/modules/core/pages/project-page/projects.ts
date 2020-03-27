import { Project } from './project-page.interfaces';

export const fakeProject: Project = {
  title: 'Recolor',
  description: `Simple Edge extension for changing the color of the title bar of installed PWAs`,
  website: 'https://microsoftedge.microsoft.com/addons/detail/jfhmeffjmnkcmdodpeollogmaihcficb',
  code: 'https://github.com/viktorsml/recolor',
  publishDate: 'Some date',
  specs: {
    role: 'Developer',
    timeline: '4 months',
    type: 'PWA',
    tech: ['demo', 'tech']
  },
  headerImage: {
    size: 'cover',
    isResponsive: true,
    widthRatio: 16,
    heightRatio: 7,
    source: {
      main: { type: 'webp', url: 'https://picsum.photos/id/1075/1140/647.webp' },
      fallback: { type: 'jpg', url: 'https://picsum.photos/id/1075/1140/647.jpg' }
    }
  },
  coverImage: {
    size: 'cover',
    isResponsive: true,
    widthRatio: 16,
    heightRatio: 7,
    source: {
      main: { type: 'webp', url: 'https://picsum.photos/id/1075/1140/647.webp' },
      fallback: { type: 'jpg', url: 'https://picsum.photos/id/1075/1140/647.jpg' }
    }
  },
  information: {
    about: [
      `Do you have a progressive web application installed with Edge (Chromium) and want to change the color of the title bar?`,
      `This simple extension does exactly that, if a PWA doesn't have the color bar you like you can change it with this extension
          to any color you like.`
    ],
    challenges: [
      `Do you have a progressive web application installed with Edge (Chromium) and want to change the color of the title bar?`,
      `This simple extension does exactly that, if a PWA doesn't have the color bar you like you can change it with this extension
          to any color you like.`
    ],
    result: [
      `Do you have a progressive web application installed with Edge (Chromium) and want to change the color of the title bar?`,
      `This simple extension does exactly that, if a PWA doesn't have the color bar you like you can change it with this extension
          to any color you like.`
    ]
  },
  gallery: [
    {
      size: 'cover',
      isResponsive: true,
      widthRatio: 16,
      heightRatio: 9,
      source: {
        main: { type: 'webp', url: 'https://picsum.photos/id/1076/1140/647.webp' },
        fallback: { type: 'jpg', url: 'https://picsum.photos/id/1076/1140/647.jpg' }
      }
    },
    {
      size: 'cover',
      isResponsive: true,
      widthRatio: 16,
      heightRatio: 9,
      source: {
        main: { type: 'webp', url: 'https://picsum.photos/id/1077/1077/647.webp' },
        fallback: { type: 'jpg', url: 'https://picsum.photos/id/1077/1140/647.jpg' }
      }
    }
  ]
};
