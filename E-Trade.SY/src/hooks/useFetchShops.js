import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchShops = () => {
    // return axios.get("http://localhost:3000/shops");
    //backend
    return axios.get("http://localhost:3000/stores");
}


export default function useFetchShops() {
    return useQuery({
        queryKey: ["shops"],
        queryFn: () => fetchShops(),
    })
}