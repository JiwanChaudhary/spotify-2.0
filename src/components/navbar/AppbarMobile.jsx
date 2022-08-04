import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useUIContext } from "../../context";
import { NavbarContainer, ProductImage } from "../../styles/navbar";
import { Colors } from "../../styles/theme";
import MenuIcon from "@mui/icons-material/Menu";

const AppbarMobile = () => {
  const { setShowDrawer } = useUIContext();
  

  return (
    <NavbarContainer sx={{ background: Colors.black, width: "100%" }}>
      <Box
        sx={{ ml: "30px", pt: "10px", pb: "10px" }}
        display="flex"
        alignItems="center"
      >
        <ProductImage src="/images/lo.png" alt="logo" />
        <Typography
          color={Colors.white}
          variant="h5"
          sx={{ cursor: "pointer" }}
        >
          Spotify
        </Typography>
      </Box>
      <IconButton
        sx={{ color: Colors.white, mr: "30px" }}
        onClick={() => setShowDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
    </NavbarContainer>
  );
};

export default AppbarMobile;
