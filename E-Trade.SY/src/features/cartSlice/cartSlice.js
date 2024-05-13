import { createSlice } from "@reduxjs/toolkit";

// import { useMutateCart } from "../../hooks/useFetchShopCart";

const initialState = {
    items: []
}

// const { mutate } = useMutateCart();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { name, price, StoreId } = action.payload;
            // state.items.push(action.payload);
            console.log("action: ", name, price, StoreId);
            console.log(action.payload);
        }
    }
})


export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;