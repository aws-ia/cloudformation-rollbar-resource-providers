import {AbstractRollbarResource} from "./abstract-rollbar-resource";
import {BaseModel, ResourceHandlerRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {
    AccessDenied,
    InternalFailure,
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
    describe('processRequestException', () => {
        let testInstance: TestAbstractResource;

        beforeAll(() => {
            testInstance = new TestAbstractResource('foo', BaseModel, undefined, undefined, BaseModel);
        });

        it.each([
            [InvalidRequest, '400'],
            [InvalidCredentials, '401'],
            [AccessDenied, '403'],
            [NotFound, '404'],
            [ServiceInternalError, '413'],
            [ServiceInternalError, '422'],
            [ServiceLimitExceeded, '429'],
            [InternalFailure, '500'],
            [InternalFailure, null],
            [InternalFailure, undefined]
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
                } else if (e instanceof InternalFailure) {
                    expect(e.message).toContain(`Unexpected error occurred, see serialized exception below:\n${error}`);
                } else {
                    expect(e.message).toContain(error);
                }
            }
        });
    });
});
