export enum Environment {
  Production = 'Production',
  Testing = 'Testing',
  Development = 'Development',
  Server = 'Server',
}

export enum SupportedLanguage {
  English = 'en',
  Spanish = 'es',
}

export const DefaultLanguage = SupportedLanguage.English;

export interface ISupportedLanguageDefinition {
  code: SupportedLanguage;
  label: string;
  help: string;
}
