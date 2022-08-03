import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";


export const NavbarContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: Colors.white,
    width: "100%",

}));
export const ProductImage = styled("img")(({ src }) => ({
    src: `url(${src})`,
    width: "60px",
    height: '60px',
    marginRight: '10px',
    cursor: 'pointer',
  }));

// header
// export const NavbarHeader = styled(Typography)(() => ({
//     padding: "4px",
//     flexGrow: 1,
//     fontSize: "4em",
//     color: Colors.black,
// }));

// //list
// export const MyList = styled(List)(({ type }) => ({
//     display: type === "row" ? "flex" : "block",
//     // flexGrow: 3,
//     justifyContent: "center",
//     alignItems: "center",
//     color: Colors.black,
// }));