import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchShopItems = (id = 1) => {
    return axios.get(`http://localhost:3000/store/${id}`);
};

export function useFetchShopItems(id) {

    return useQuery({ queryKey: ["shop", id], queryFn: () => fetchShopItems(id) });
}