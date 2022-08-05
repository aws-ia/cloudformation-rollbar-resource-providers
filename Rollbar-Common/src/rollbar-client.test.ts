import {RollbarClient, PaginatedResponseType} from "./rollbar-client";
import axios from "axios";
import Mock = jest.Mock;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.request.mockResolvedValue({});

type TestPaginationResults = {
    results: number[]
} & PaginatedResponseType;

describe('RollbarClient', () => {
    describe('doRequest', () => {
        const token = 'aabbccddee';
        const testInstance = new RollbarClient(token);

        it('sets the request URL based on the main URL + path', async () => {
            const path = '/foo/bar';

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                url: `https://api.rollbar.com${path}`
            }));
        });

        it('sets the request headers based on the token', async () => {
            const path = '/foo/bar';

            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                headers: {
                    'X-Rollbar-Access-Token': token,
                    'User-Agent': 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource'
                }
            }));
        });

        it.each([
            {foo: 'bar'},
            'foo=bar',
            undefined,
            null
        ])('sets the request params to "%p"', async (params) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', '/foo/bar', params);

            expect(mockedAxios.request).toHaveBeenCalledWith(!!params
                ? expect.objectContaining({
                    params: params
                }) : expect.not.objectContaining({
                    params: undefined
                }));
        });

        it.each([
            'get',
            'put',
            'post',
            'patch',
            'delete'
        ])('sets the request method to "%p"', async (method) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest(method as 'get' | 'put' | 'post' | 'patch' | 'delete', '/foo/bar');

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                method: method
            }));
        });
    });
});