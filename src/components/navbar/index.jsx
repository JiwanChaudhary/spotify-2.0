import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <AppbarMobile /> : <AppbarDesktop />}</>;
};

export default Navbar;
