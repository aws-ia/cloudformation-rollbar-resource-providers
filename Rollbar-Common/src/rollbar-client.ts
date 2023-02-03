import axios, {AxiosResponse} from "axios";

export type ApiError = {
    message?: string
    err: number
}

export type PaginatedResponseType = {
    offset: number
    limit: number
    more: boolean
    total: number
}

export class RollbarClient {
    private readonly apiToken: string;
    private readonly userAgent: string;

    constructor(apiToken: string, userAgent?: string) {
        this.apiToken = apiToken;
        this.userAgent = userAgent;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'patch' | 'delete', path: string, params: any = {}, body?: {}, headers?: {[key: string]: string}): Promise<AxiosResponse<ResponseType>> {
        console.log('printing params  : '+ params);
        console.log('printing body  : '+ body);
        console.log('printing method  : '+ method);
        console.log('printing apiToken  : '+ this.apiToken);
        console.log('printing headers  : '+ headers);
        return await axios.request<ResponseType>({
            url: `https://api.rollbar.com${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                'X-Rollbar-Access-Token': this.apiToken,
                'User-Agent': this.userAgent || 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource',
                ...headers
            }
        });
    }
}