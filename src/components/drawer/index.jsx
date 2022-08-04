import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { DrawerCloseButton, ProductImage } from "../../styles/navbar";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppbarDrawer = () => {
  const { showDrawer, setShowDrawer } = useUIContext();

  return (
    <>
      {showDrawer && (
        <DrawerCloseButton onClick={() => setShowDrawer(false)}>
          <CloseIcon />
        </DrawerCloseButton>
      )}
      <Drawer
        open={showDrawer}
        anchor="right"
        PaperProps={{
          sx: {
            width: "350px",
            background: Colors.black,
            color: Colors.white,
            mt: "25px",
          },
        }}
        onClose={() => setShowDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemText>
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: Colors.green }, transition: "0.3s" }}
              >
                Premium
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: Colors.green }, transition: "0.3s" }}
              >
                Support
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: Colors.green }, transition: "0.3s" }}
              >
                Download
              </Typography>
            </ListItemText>
          </ListItemButton>
          <MiddleDivider
            textAlign="left"
            sx={{
              width: "20px",
              mt: "20px",
              mb: "20px",
              height: "2px",
              background: Colors.white,
              fontWeight: "bold",
            }}
          />
          <ListItemButton>
            <ListItemText>
              <Typography
                variant="h6"
                sx={{ "&:hover": { color: Colors.green }, transition: "0.3s" }}
              >
                Sign Up
              </Typography>
            </ListItemText>
          </ListItemButton>

          <ListItemButton>
            <ListItemText>
              <Typography
                variant="h6"
                sx={{ "&:hover": { color: Colors.green }, transition: "0.3s" }}
              >
                Log in
              </Typography>
            </ListItemText>
          </ListItemButton>
        </List>
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ position: "absolute", bottom: 40, left: 10 }}
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

export default AppbarDrawer;
