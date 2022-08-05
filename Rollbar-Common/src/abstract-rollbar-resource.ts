import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBaseResource} from "./abstract-base-resource";
import {AxiosError} from "axios";
import {ApiError} from "./rollbar-client";

export abstract class AbstractRollbarResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiError>, TypeConfigurationM> {

    processRequestException(e: AxiosError<ApiError>, request: ResourceHandlerRequest<ResourceModelType>) {
        const apiError = e.response?.data;
        const errorMessage = apiError?.message || e.message;

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.InvalidCredentials(errorMessage);
            case 403:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 413:
                throw new exceptions.ServiceInternalError(`Request exceeds the maximum size of 128KB: ${errorMessage}`);
            case 422:
                throw new exceptions.ServiceInternalError(`The request was parseable (i.e. valid JSON), but some parameters were missing or otherwise invalid: ${errorMessage}`);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred, see serialized exception below:\n${JSON.stringify(e)}`);
        }
    }

}