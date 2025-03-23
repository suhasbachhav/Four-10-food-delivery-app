import { useCallback } from "react";
import { useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);


    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong!');
    }
}

export default async function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true);
        try {
            const resData = sendHttpRequest(url, config);
            setData(resData);
        } catch (error) {
            setError(error || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [url, config])


    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest()
        }
    }, [sendRequest]);
    return {
        data,
        isLoading,
        error,
        sendRequest
    }
}