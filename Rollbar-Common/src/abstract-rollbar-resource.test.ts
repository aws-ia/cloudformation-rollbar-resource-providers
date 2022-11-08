import {AbstractRollbarResource} from "./abstract-rollbar-resource";
import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {
    AccessDenied,
    InvalidCredentials,
    InvalidRequest,
    NotFound,
    ServiceInternalError,
    ServiceLimitExceeded
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {ApiError} from "./rollbar-client";
import {AxiosError} from "axios";

class TestAbstractResource extends AbstractRollbarResource<BaseModel, {}, {}, {}, {}> {
    create(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    delete(model: BaseModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    list(model: BaseModel): Promise<BaseModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): BaseModel {
        return undefined;
    }

    setModelFrom(model: BaseModel, from: {} | undefined): BaseModel {
        return undefined;
    }

    update(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }
}

describe('AbstractRollbarResource', () => {
    let testInstance: TestAbstractResource;

    beforeAll(() => {
        testInstance = new TestAbstractResource('foo', BaseModel, undefined, undefined, BaseModel);
    });

    describe('processRequestException', () => {
        it.each([
            [InvalidRequest, '400'],
            [InvalidCredentials, '401'],
            [AccessDenied, '403'],
            [NotFound, '404'],
            [InvalidRequest, '413'],
            [InvalidRequest, '422'],
            [ServiceLimitExceeded, '429'],
            [ServiceInternalError, '500'],
            [ServiceInternalError, null],
            [ServiceInternalError, undefined]
        ])('throws a %p if the request has a HTTP %s status code', (errorType, statusCode) => {
            const error = 'Forced error';
            let axiosError = new AxiosError<ApiError>(error);
            axiosError.status = statusCode;

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e).toBeInstanceOf(errorType);
                if (e instanceof NotFound) {
                    expect(e.message).not.toContain(error);
                } else if (e instanceof ServiceInternalError) {
                    expect(e.message).toContain(`Unexpected error occurred:\n${error}`);
                } else {
                    expect(e.message).toContain(error);
                }
            }
        });
    });

    describe('checkForTransientError', () => {
        it.each([
            [new exceptions.InvalidRequest(), false],
            [new exceptions.InvalidRequest('Invalid request. Please try again.'), false],
            [new exceptions.InvalidCredentials(), false],
            [new exceptions.InvalidCredentials('Invalid credentials. Please try again.'), false],
            [new exceptions.InternalFailure(), false],
            [new exceptions.InternalFailure('Internal failure. Please try again.'), false],
            [new exceptions.GeneralServiceException(), false],
            [new exceptions.GeneralServiceException('General service issue. Please try again.'), false],
            [new exceptions.ServiceInternalError(), false],
            [new exceptions.ServiceInternalError('Service issue. Please try again.'), true],
            [new exceptions.ServiceInternalError('The service encountered an issue, please try again later.'), true]
        ])('throws a %p if the request has a HTTP %s status code', (error: Error, shouldReplay: boolean) => {
            const resourceModel = {
                foo: 'bar'
            };
            const request = new ResourceHandlerRequest({
                desiredResourceState: resourceModel
            });
            const callbackContext = {
                retry: 10
            }

            try {
                const progressEvent = testInstance.checkForTransientError(error, request, callbackContext);
                if (!shouldReplay) {
                    fail('This should have thrown');
                }
                expect(progressEvent).not.toBeUndefined();
                expect(progressEvent.resourceModel).toBe(resourceModel);
                expect(progressEvent.callbackContext).toBe(callbackContext);
                expect(progressEvent.callbackDelaySeconds).toBeGreaterThanOrEqual(0);
            } catch (e) {
                if (shouldReplay) {
                    fail('This should have not thrown, but return a progress event');
                }
                expect(e).toBe(error);
            }
        });
    });
});
