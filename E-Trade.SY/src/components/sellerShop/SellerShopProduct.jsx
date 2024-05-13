//react hooks

//mui
import { Grid } from "@mui/material";

//components
import SellerShopProductCard from "./SellerShopProductCard";

export default function SellerShopProduct({ shopItem }) {
  return (
    <>
      <Grid item xs={6} sm={4} md={4} lg={3}>
        <SellerShopProductCard shopItem={shopItem} />
      </Grid>
    </>
  );
}
