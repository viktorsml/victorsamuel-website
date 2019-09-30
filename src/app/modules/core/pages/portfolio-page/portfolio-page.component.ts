import { Component, OnInit } from '@angular/core';
import { Project } from './portfolio-page.interfaces';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  public projects: Project[];

  constructor() {
    this.projects = [
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://picsum.photos/500?random=27'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://picsum.photos/500?random=1'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://picsum.photos/500?random=28'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://picsum.photos/500?random=29'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://picsum.photos/500?random=30'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://picsum.photos/500?random=31'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'ProSmiles',
        description: 'Sistema de reservaciones con sincronización en tiempo real diseñado especificamente para consultorio dental',
        pictureSource: {
          jpg: 'https://st2.depositphotos.com/6222352/9212/v/450/depositphotos_92123120-stock-illustration-cartoon-tooth-with-x-ray.jpg'
        },
        codeUrl: 'https://tecmm-prosmiles.web.app/auth/login',
        tags: [
          { id: 'react', displayText: 'React' },
          { id: 'nodejs', displayText: 'NodeJS' },
          { id: 'mongodb', displayText: 'MongoDB' },
        ]
      },
      {
        projectId: 'hpr-website',
        title: 'Hotel Posada de Roger',
        description: 'Rediseño del sitio web del hotel convirtiendolo en una single page application con renderizado del lado del servidor y un sistema de reservaciones personalizado',
        pictureSource: {
          webp: 'https://dev.hotelposadaderoger.com/slide1.802d839c1c4514dd8687.webp',
          jpg: 'https://dev.hotelposadaderoger.com/slide1.802d839c1c4514dd8687.jpg'
        },
        codeUrl: 'https://github.com/viktorsml/hpr-website',
        tags: [
          { id: 'angular', displayText: 'Angular' },
          { id: 'laravel', displayText: 'Laravel' },
          { id: 'ui-ux', displayText: 'UI/UX' },
        ]
      },
      {
        projectId: 'personal-website',
        title: 'Portfolio Website',
        description: 'A minimalist single page application made to hold projects and contact information',
        pictureSource: {
          webp: '/assets/image/victor-samuel-profile.webp',
          jpg: '/assets/image/victor-samuel-profile.jpg'
        },
        tags: [
          { id: 'angular', displayText: 'Angular' },
          { id: 'branding', displayText: 'Branding' },
        ]
      },
    ];
  }

  ngOnInit() {}

}
