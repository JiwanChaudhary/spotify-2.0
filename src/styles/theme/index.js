import { createTheme } from "@mui/material/styles"



export const Colors = {
    dim_gray: "#919496",
    black: "#000000",
    white: "#FFFFFF",
    green: '#1ED760',
}

const theme = createTheme({
    palatte: {
        paimary: {
            main: Colors.white,
        },
        secondary: {
            main: Colors.black,
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
            },
        },
    },
});

export default theme;