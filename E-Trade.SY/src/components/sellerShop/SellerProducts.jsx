//mui
import { Typography } from "@material-ui/core";
import { Box, Grid, useMediaQuery } from "@mui/material";

//hooks
import { useFetchShopItems } from "../../hooks/useFetchShopItems";

// ui components
import ShopItemsSkeleton from "./SellerProductSkeleton";

//components
import SellerShopProduct from "./SellerShopProduct";

//router
// import { useParams } from "react-router-dom";

export const SellerProducts = () => {
  const matchesXS = useMediaQuery("(max-width:599px)");
  const matchesSM = useMediaQuery("(min-width:600px) and (max-width:899px)");
  const matchesMD = useMediaQuery("(min-width:900px) and (max-width:1199px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");

  let paddingX;
  if (matchesXS) {
    paddingX = 20;
  } else if (matchesSM) {
    paddingX = 40;
  } else if (matchesMD) {
    paddingX = 80;
  } else if (matchesLG) {
    paddingX = 80;
  }

  const { isLoading, isError, data: shop } = useFetchShopItems();

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
          padding: `0 ${paddingX}px`,
          margin: "10px 0px",
          fontWeight: "bold",
        }}
      >
        {shop?.data.StoreName}:
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 2,
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginBottom: { xs: 7, sm: 0 },
        }}
      >
        {shop?.data?.pro?.map((shopItem, index) => (
          <SellerShopProduct key={index} shopItem={shopItem} />
        ))}
      </Grid>
    </>
  );
};
