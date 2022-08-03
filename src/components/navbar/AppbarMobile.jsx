import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { ProductImage } from "../../styles/navbar";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppbarMobile = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      {showDrawer && (
        <IconButton sx={{ position: "absolute", top: "60px", right: "320px", color: Colors.black }}>
          <CloseIcon />
        </IconButton>
      )}
      <Drawer
        open={true}
        anchor="right"
        PaperProps={{
          sx: { width: "300px", background: Colors.black, color: Colors.white },
        }}
      >
        <List>
          <ListItemButton>
            <ListItemText>Premium</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Support</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Download</ListItemText>
          </ListItemButton>
          <MiddleDivider
            textAlign="left"
            sx={{ width: "20px", height: "2px" ,background: Colors.white, fontWeight: "bold" }}
          />
          <ListItemButton>
            <ListItemText>Sign Up</ListItemText>
          </ListItemButton>

          <ListItemButton>
            <ListItemText>Log in</ListItemText>
          </ListItemButton>
        </List>
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ position: "absolute", bottom: 10, left: 10 }}
        >
          <ProductImage
            src="/images/lo.png"
            alt="logo"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="h6" sx={{ cursor: "pointer" }}>
            Spotify
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default AppbarMobile;
