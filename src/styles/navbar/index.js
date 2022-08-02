import { Box, Typography, List } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";


export const NavbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 8px",
    background: Colors.black,
    width: "100%",
}));

// header
export const NavbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    color: Colors.white,
}));

//list
export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
    color: Colors.white,
}));