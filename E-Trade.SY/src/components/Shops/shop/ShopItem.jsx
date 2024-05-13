//react hooks
import { useState } from "react";

//mui
import { Grid } from "@mui/material";

//components
import ShopItemModal from "./ShopItemModal";
import ShopItemCard from "./ShopItemCard";

export default function ShopItem({ shopItem }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <ShopItemCard
          shopItem={shopItem}
          handleOpen={() => setOpenModal(true)}
        />
      </Grid>
      {openModal && (
        <ShopItemModal
          shopItem={shopItem}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}
