
interface CustomFetchPropTypes {
    url: string;
    method: string;
    body?: any;
    params?: object;
    onSuccess?: Function;
    onError?: Function;
}

export const customFetch = ({ url, method = 'GET', body, params, onSuccess, onError }: CustomFetchPropTypes) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: undefined

    }
    if (body) {
        options.body = JSON.stringify(body);
    }
    if (params) {
        const queryString = Object.keys(params)
            .map(key => key + '=' + params[key])
            .join('&');
        url = url + '?' + queryString;
    }
    return fetch(url, options)
        .then(response => response.json())
        .then(data => onSuccess(data))
        .catch(error => onError(error));
}

