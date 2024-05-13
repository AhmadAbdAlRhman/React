//mui
import { Box, Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

//hooks
import { useFetchShopItems } from "../../../hooks/useFetchShopItems";

// ui components
import ShopItemsSkeleton from "./ShopItemsSkeleton";

//components
import ShopItem from "../shop/ShopItem";

//router
import { useParams } from "react-router-dom";

export const ShopItems = () => {
  const { id: shopId } = useParams();
  const { isLoading, isError, data: shop } = useFetchShopItems(shopId);
  if (isLoading) {
    return <ShopItemsSkeleton />;
  }
  if (isError) {
    return <Box>Error...</Box>;
  }

  return (
    <>
      <Typography
        variant={"h6"}
        style={{
          padding: "0 20px",
          margin: "10px 0",
          fontWeight: "bold",
        }}
      >
        {shop?.data.storeName}:
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 2,
          paddingRight: { xs: 2, sm: 5, md: 10 },
          paddingLeft: { xs: 2 },
          marginBottom: { xs: 7, sm: 0 },
        }}
      >
        {shop?.data?.pro?.map((shopItem, index) => (
          <ShopItem key={index} shopItem={shopItem} />
        ))}
      </Grid>
    </>
  );
};
