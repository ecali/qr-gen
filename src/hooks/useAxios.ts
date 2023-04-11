import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {useState} from "react";


axios.defaults.baseURL = 'https://quickchart.io';
export const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (params: AxiosRequestConfig) => {
        try{
            const result = await axios.request(params);
            setResponse(result);
        } catch (error) {
            setError(error as AxiosError);
        } finally {
            setLoading(false);
        }
    }

    const sendData = () => {
        fetchData(axiosParams);
    };

    return {response, loading, error, sendData};
}