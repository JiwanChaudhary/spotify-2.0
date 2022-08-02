import React from "react";
import { ListItemText, Divider } from "@mui/material";
import { NavbarContainer, NavbarHeader, MyList } from "../../styles/navbar";

const AppbarDesktop = () => {
  return (
    <NavbarContainer>
      <NavbarHeader>Spotify</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Premium" />
        <ListItemText primary="Support" />
        <ListItemText primary="Download" />
        <Divider orientation="vertical" variant="inser" />
        <ListItemText primary="Sign Up" />
        <ListItemText primary="Log in" />
      </MyList>
    </NavbarContainer>
  );
};

export default AppbarDesktop;
