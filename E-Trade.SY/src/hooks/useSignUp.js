import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from "js-cookie";

// import { jwtDecode } from "jwt-decode";

import { useNavigate } from 'react-router-dom';

async function signUp({ firstName, lastName, email, password }) {

    try {

        const response = await axios.post("http://localhost:3000/Register", {
          firstName,
          lastName,
          email,
          password,
        });
        axios.defaults.withCredentials = true;
        // const token = Cookies.get(response.jwt);

        // localStorage.setItem("token", token);
        return response.data;


    } catch (error) {
        throw new Error(`Error during sign-up: ${error.message}`);
    }
}
export function useSignUp() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: signUp,
        onSuccess: (response) => {
            console.log(response.token);
            Cookies.set("token",response.token);
            localStorage.setItem("token", response.token);
            navigate("../main/shops")
        },
        onError: (error) => {
            console.log(error.message);
        }
    })
}