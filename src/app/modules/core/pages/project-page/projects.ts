import { Project } from './project-page.interfaces';

export const fakeProject: Project = {
  title: 'Lorem Ipsum',
  description: `Etiam eu fringilla turpis. Nullam vel purus quis sapien consequat eleifend.`,
  website: 'https://example.com',
  code: 'https://example.com',
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
    heightRatio: 6,
    widthRatio: 5,
    source: {
      main: { type: 'webp', url: 'https://picsum.photos/id/1075/1140/647.webp' },
      fallback: { type: 'jpg', url: 'https://picsum.photos/id/1075/1140/647.jpg' }
    }
  },
  information: {
    about: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh sem, porttitor sit amet lectus ut, dignissim rutrum mauris.
      Aliquam erat volutpat. Pellentesque eleifend magna sed ligula sollicitudin, sit amet euismod felis egestas.`,
      `Mauris ultrices imperdiet risus ac euismod. Sed volutpat non enim vel dapibus.`
    ],
    challenges: [
      `Aenean viverra sollicitudin lorem vel pulvinar. Ut sed libero et justo hendrerit luctus eget id quam. Sed vel arcu lacus.
      Sed id magna sapien. Curabitur lobortis tellus nisi, et bibendum purus varius vitae. Duis sodales, turpis id ultrices pretium,
      libero elit tempor mauris, at facilisis nibh risus a turpis.`
    ],
    result: [
      `Vivamus vehicula ullamcorper lacus, vitae efficitur tortor auctor non. Proin sed odio nec tortor egestas molestie.`,
      `Praesent aliquet ex nisl, consectetur condimentum neque dapibus non. Sed sit amet eros at neque pharetra venenatis vel at nulla.`,
      `Donec eget placerat orci. Etiam consequat a felis sed malesuada. Maecenas a nunc non tellus hendrerit consectetur ac sit amet quam.`
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
