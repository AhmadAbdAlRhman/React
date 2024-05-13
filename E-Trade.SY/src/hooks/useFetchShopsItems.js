import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchShopsItems = () => {
    return axios.get("http://localhost:3000/product");
}

export function useFetchShopsItems() {
    return useQuery({
        queryKey: ['shops-items'],
        queryFn: fetchShopsItems,
    })
}