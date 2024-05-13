import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from "js-cookie";

import { useNavigate } from 'react-router-dom';
async function createNewStore(newStoreData) {
    console.log(newStoreData);
    try {
      const response = await axios.post(
        "http://localhost:3000/create-store",
        newStoreData
      );
      axios.defaults.withCredentials = true;

      // const token = response.data.token;
      // localStorage.setItem('token', token);

      return response.data;
    } catch (error) {
        throw new Error(`Error creating store: ${error.message}`);
    }
}

export function useCreateStore() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: createNewStore,
        onSuccess: (response) => {
            console.log(response.token);
            Cookies.set("token",response.token);
            localStorage.setItem("token", response.token);
            navigate("../my-shop")
        },
        onError: (error) => console.log(error.message)
    });

}