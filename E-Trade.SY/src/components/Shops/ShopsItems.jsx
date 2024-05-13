//mui
import { Box, Grid } from "@mui/material";

//hooks
import { useFetchShopsItems } from "../../hooks/useFetchShopsItems";

// ui components
import ShopItemsSkeleton from "./shop/ShopItemsSkeleton";

//components
import ShopItem from "./shop/ShopItem";

//router

export default function ShopsItems() {
  const { isLoading, isError, data: shopsItems } = useFetchShopsItems();
  if (isLoading) {
    return <ShopItemsSkeleton />;
  }
  if (isError) {
    return <Box>Error...</Box>;
  }

  return (
    <>
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
        {shopsItems?.data.product?.map((shopItem) => (
          <ShopItem key={shopItem.id} shopItem={shopItem} />
        ))}
      </Grid>
    </>
  );
}
