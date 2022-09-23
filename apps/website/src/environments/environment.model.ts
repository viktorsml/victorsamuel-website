export interface IEnvironment {
    production: boolean;
    contactEmail: string;
    composeNewEmailUrl: string;
    websiteBaseUrl: string;
    brandedBaseUrl: string;
    backendEndpoint: string;
    postHogProjectApiKey: string;
    analyticsServerUri: string;
    bookingServiceUsername: string;
    fifteenMinMeetingId: string;
    thirtyMinMeetingId: string;
}
