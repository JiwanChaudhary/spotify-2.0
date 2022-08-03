import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import { NavbarContainer, ProductImage } from "../../styles/navbar";

const navItems = ["Premium", "Support", "Download", "Sign Up", "Log in"];

const AppbarDesktop = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <NavbarContainer>
      <AppBar
        position={"static"}
        sx={{
          m: 0,
          background: Colors.black,
          padding: matches ? "5px 100px" : "5px 60px",
        }}
      >
        <Toolbar>
          <Box display={"flex"} alignItems={"center"}>
            <ProductImage src="/images/lo.png" alt="logo" />
            <Typography variant="h4" sx={{ cursor: "pointer" }}>
              Spotify
            </Typography>
          </Box>
          <Tabs sx={{ ml: "auto" }} textColor="inherit" centered>
            {navItems.map((item) => (
              <Tab
                key={item}
                label={item}
                sx={{
                  color: Colors.white,
                  opacity: 1,
                  transition: "0.3s",
                  "&:hover": {
                    color: Colors.green,
                  },
                }}
                disableRipple
                disableFocusRipple
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default AppbarDesktop;

/* 
<Tab label="Premium" sx={{color: Colors.white, opacity: 1}} disableRipple />
            <Tab label="Support" sx={{color: Colors.white, opacity: 1}} />
            <Tab label="Download" sx={{color: Colors.white, opacity: 1}} />
            <Divider orientation="vertical" />
            <Tab label="Sign Up" sx={{color: Colors.white, opacity: 1}} />
            <Tab label="Log in" sx={{color: Colors.white, opacity: 1}} />
*/
