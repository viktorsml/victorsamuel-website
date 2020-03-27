import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';

interface ProjectInformation {
  about: string[];
  challenges?: string[];
  technology?: string[];
  frontEnd?: string[];
  backEnd?: string[];
  result?: string[];
}

export interface ProjectSpecs {
  type: string;
  role: string;
  timeline: string;
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  website?: string;
  code?: string;
  coverImage: SmartPictureSettings;
  headerImage: SmartPictureSettings;
  information: ProjectInformation;
  specs: ProjectSpecs;
  gallery?: SmartPictureSettings[];
  publishDate: string;
}
