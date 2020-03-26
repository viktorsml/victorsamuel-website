import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';

export interface Project {
  projectId: string;
  title: string;
  description: string;
  pictureSource: SmartPictureSettings;
  tags: string[];
  codeUrl?: string;
}
