import { useState, useEffect } from "react";
import Axios from "axios";
import useLocalStorage from "./useLocalStorage";


const useAxios = (keyInLS, baseUrl) => {
    const [response, setResponse] = useLocalStorage(keyInLS);

    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await Axios.get(`${baseUrl}${restOfUrl}`);
        setResponse(data => [...data, formatter(response.data)]);
    };

    const cleareResponse = () => setResponse([]);

    return [response, addResponseData, cleareResponse];
};

export default useAxios;