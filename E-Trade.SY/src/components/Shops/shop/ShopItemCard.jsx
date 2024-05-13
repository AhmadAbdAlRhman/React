//mui
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

//context
import { useThemeContext } from "../../../context/ThemeModeProvider";

//components
import ShopAddTocartBtn from "./ShopAddTocartBtn";
import ShopRatingProduct from "./ShopRatingProduct";

export default function ShopItemCard({ shopItem, handleOpen }) {
  const { darkMode } = useThemeContext();

  return (
    <Card className={`item ${darkMode ? "dark" : "light"}`}>
      <CardActionArea onClick={() => handleOpen()}>
        <CardMedia
          component="img"
          height="150"
          // image={shopItem.photo_data}
          image={`http://localhost:3000/images/` + shopItem.photo_data}
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
            <Typography sx={{ overflow: "hidden", fontWeight: "bold" }}>
              <span>product:</span> {shopItem.name}
            </Typography>

            <Typography>
              <span style={{ fontWeight: "bold" }}>price:</span>{" "}
              {shopItem.price} S.P.
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      <ShopRatingProduct shopItemRating={shopItem.avg} />
      <ShopAddTocartBtn shopItem={shopItem} />
    </Card>
  );
}
