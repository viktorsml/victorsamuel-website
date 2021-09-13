import { environment } from '@environment';

export const defaultValues = {
  type: $localize`profile`,
  pageTitle: $localize`Victor Samuel | Full-Stack Web Developer`,
  description: $localize`Full-Stack Developer Focused on UI/UX. I create beautiful user-centered web applications using the latest technologies.`,
  image: `${environment.websiteBaseUrl}/assets/image/victor-samuel-profile.jpg`,
  url: environment.websiteBaseUrl,
};
