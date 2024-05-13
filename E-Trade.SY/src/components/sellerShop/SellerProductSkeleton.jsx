import { Box, Grid, Skeleton } from "@mui/material";
import { useThemeContext } from "../../context/ThemeModeProvider";

export default function SellerProductSkeleton() {
  const { darkMode } = useThemeContext();

  return (
    <Box>
      <Skeleton
        width={150}
        height={30}
        animation="wave"
        variant={"rounded"}
        sx={{ marginX: { xs: 2, sm: 5, md: 10 }, marginY: "10px" }}
      />
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 2,
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginBottom: { xs: 7, sm: 0 },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_skeleton, index) => (
          <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
            <Box className={`item ${darkMode ? "dark" : "light"}`}>
              <Skeleton
                variant="rounded"
                animation="wave"
                height={150}
                width={"100%"}
                sx={{ borderRadius: "12px 12px 0 0 " }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingY: 3,
                  paddingX: 2,
                }}
              >
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={"100%"}
                  height={20}
                  sx={{ marginBottom: 1 }}
                />
                <Skeleton variant="rounded" animation="wave" width={90} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
