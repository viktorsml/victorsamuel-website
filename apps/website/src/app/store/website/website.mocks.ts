import { ApiCallStatus, IWebsiteState } from './website.models';

export const defaultWebsiteState: IWebsiteState = {
    isLoading: false,
    isInHomePage: false,
    projectList: {
        status: ApiCallStatus.Pending,
        updatedDate: '',
        data: [],
    },
};

export const overwritesWebsiteState = {
    isLoading: false,
    isInHomePage: false,
};
