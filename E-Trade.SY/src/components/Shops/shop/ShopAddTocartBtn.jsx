//mui
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";

//hooks
import { useMutateCart } from "../../../hooks/useFetchShopCart";

//redux toolkit
// import { useDispatch } from "react-redux";
//cartSlice
// import { addProduct } from "../../../features/cartSlice/cartSlice";

export default function ShopAddTocartBtn({ shopItem }) {
  // const dispatch = useDispatch();
  const { mutate } = useMutateCart();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "#2200FF",
        borderRadius: "12px",
      }}
    >
      <IconButton onClick={() => mutate(shopItem)}>
        <AddShoppingCartIcon fontSize="small" sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
}
