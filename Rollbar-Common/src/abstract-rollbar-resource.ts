import {
    Action,
    BaseModel,
    exceptions,
    handlerEvent,
    LoggerProxy,
    OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBaseResource, RetryableCallbackContext} from "./abstract-base-resource";
import {AxiosError} from "axios";
import {ApiError} from "./rollbar-client";
import {
    ServiceInternalError
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

export abstract class AbstractRollbarResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiError>, TypeConfigurationM> {

    @handlerEvent(Action.Create)
    async createHandler(session: Optional<SessionProxy>, request: ResourceHandlerRequest<ResourceModelType>, callbackContext: RetryableCallbackContext, logger: LoggerProxy, typeConfiguration: TypeConfigurationM): Promise<ProgressEvent<ResourceModelType, RetryableCallbackContext>> {
        try {
            return super.createHandler(session, request, callbackContext, logger, typeConfiguration);
        } catch (e) {
            return this.checkForTransientError(e, request, callbackContext);
        }
    }

    @handlerEvent(Action.Update)
    async updateHandler(session: Optional<SessionProxy>, request: ResourceHandlerRequest<ResourceModelType>, callbackContext: RetryableCallbackContext, logger: LoggerProxy, typeConfiguration: TypeConfigurationM): Promise<ProgressEvent<ResourceModelType, RetryableCallbackContext>> {
        try {
            return super.updateHandler(session, request, callbackContext, logger, typeConfiguration);
        } catch (e) {
            return this.checkForTransientError(e, request, callbackContext);
        }
    }

    @handlerEvent(Action.Delete)
    async deleteHandler(session: Optional<SessionProxy>, request: ResourceHandlerRequest<ResourceModelType>, callbackContext: RetryableCallbackContext, logger: LoggerProxy, typeConfiguration: TypeConfigurationM): Promise<ProgressEvent<ResourceModelType, RetryableCallbackContext>> {
        try {
            return super.deleteHandler(session, request, callbackContext, logger, typeConfiguration);
        } catch (e) {
            return this.checkForTransientError(e, request, callbackContext);
        }
    }

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
                throw new exceptions.InvalidRequest(`Request exceeds the maximum size of 128KB: ${errorMessage}`);
            case 422:
                throw new exceptions.InvalidRequest(`The request was parseable (i.e. valid JSON), but some parameters were missing or otherwise invalid: ${errorMessage}`);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.ServiceInternalError(`Unexpected error occurred:\n${errorMessage}`);
        }
    }

    // When performing actions (i.e. create/update/delete) Rollbar returns sometimes 500 errors with a message
    // saying to try again later. So that's what we are doing here by replaying the same event and callback context that
    // we got this time around.
    checkForTransientError(e: Error, request: ResourceHandlerRequest<ResourceModelType>, callbackContext: RetryableCallbackContext) {
        if (e instanceof ServiceInternalError && e.message.match(/please try again/i)) {
            const maxDelay = Math.pow(2, callbackContext.retry || 1) * Math.random();
            return ProgressEvent.builder<ProgressEvent<ResourceModelType, RetryableCallbackContext>>()
                .status(OperationStatus.InProgress)
                .resourceModel(request.desiredResourceState)
                .callbackContext(callbackContext)
                .callbackDelaySeconds(maxDelay * Math.random())
                .build();
        }
        throw e;
    }

}