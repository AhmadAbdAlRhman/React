//useFetchShopCart
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


// import { useSelector } from "react-redux";

function fetchCart() {
    return axios.get("http://localhost:3000/cart");
    //must be => return axios.get(`http://localhost:3000/cart/${userId}`);
}

function mutateCart(data) {
    const { name, price, StoreId } = data;
    return axios.post("http://localhost:3000/cart", { name, price, StoreId, quantity: 1 })
}

function deleteCartItem(id) {
    return axios.delete(`http://localhost:3000/cart/${id}`);
}



export function useFetchCartItems() {
    return (
        useQuery({
            queryKey: ["cart"],
            queryFn: fetchCart,
        })
    )
}

export function useMutateCart() {
    return (
        useMutation({
            mutationFn: (data) => mutateCart(data)
        })
    )
}

export function useDeletaCartItem() {
    const queryClient = useQueryClient();
    return (
        useMutation({
            mutationFn: (id) => deleteCartItem(id),
            onSuccess: () => queryClient.invalidateQueries("cart")
        })
    )
}