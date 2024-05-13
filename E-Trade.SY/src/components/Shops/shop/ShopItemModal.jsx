//mui
import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Modal } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import ImageCarousel from "./ImageCarousel";
import ModalItemDescription from "./ModalItemDescription";

//for styled box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 500, md: 700, lg: 800 },
  height: 500,
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
};

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : "rgba(17, 25, 40, 1)",
  overflowY: "scroll",
  overflowX: "clip",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[200],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function ShopItemModal({ shopItem, openModal, setOpenModal }) {
  const images = [shopItem?.photo_data, ...(shopItem?.optionalImages ?? [])];
  return (
    <>
      <Hidden xsDown>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBox sx={style}>
            <ImageCarousel images={images} />
            <ModalItemDescription shopItem={shopItem} />
          </StyledBox>
        </Modal>
      </Hidden>
      <Hidden smUp>
        <StyledSwipeableDrawer
          anchor="bottom"
          open={openModal}
          onClose={() => setOpenModal(false)}
          onOpen={() => setOpenModal(true)}
          swipeAreaWidth={56}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              style,
              py: 4,
              px: 2,
              height: 500,
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <Puller />
            <ImageCarousel shopItem={shopItem} images={images} />
            <ModalItemDescription shopItem={shopItem} />
          </StyledBox>
        </StyledSwipeableDrawer>
      </Hidden>
    </>
  );
}

const StyledSwipeableDrawer = withStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "12px 12px 0 0 ",
    },
  },
})(SwipeableDrawer);
