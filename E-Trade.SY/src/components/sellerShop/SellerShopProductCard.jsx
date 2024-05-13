//mui
import { Typography } from "@material-ui/core";
import { Box, Card, CardContent, CardMedia } from "@mui/material";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//components
import ProductRate from "./ProductRate";
import SellerShopQuantity from "./SellerShopQuantity";
import SellerProductEdit from "./SellerProductEdit";

export default function SellerShopProductCard({ shopItem }) {
  const { darkMode } = useThemeContext();
  return (
    <Card className={`item ${darkMode ? "dark" : "light"}`}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="150"
        image={shopItem.photo_data}
        alt={shopItem.name}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Typography className="shop-item-name" sx={{ overflow: "hidden" }}>
            {shopItem.name}
          </Typography>

          <Typography className="shop-item-price">
            <span>price:</span> {shopItem.price} S.P.
          </Typography>
        </Box>
      </CardContent>
      {/* </CardActionArea> */}

      <ProductRate productRate={shopItem.avg} />
      <SellerProductEdit />
      <SellerShopQuantity quantity={shopItem.quantity} />
    </Card>
  );
}
