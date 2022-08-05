import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";




export const HomeContainer = styled(Box)(({ theme }) => ({
    background: 'url(https://www.scdn.co/i/free/bubbles-dktp.svg) center -138px / 100% 1068px no-repeat, linear-gradient(-45deg, rgb(108, 14, 224) -5%, rgb(240, 55, 166))',
    backgroundPosition: 'center -138px',
    width: '100%',
    height: '600px',
    [theme.breakpoints.down("md")]: {
        height: '376px',
    },
}));


export const MainImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    height: '495px',
    width: '325px',
    [theme.breakpoints.down("md")]: {
        display: 'none',
    },
}));

export const HomeTitleContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
}));

export const HomeTitle = styled(Typography)(({ theme }) => ({
    color: Colors.white,
    fontWeight: 'bold',
    letterSpacing: 1,
    [theme.breakpoints.down("md")]: {
        letterSpacing: 1.5,
    },
    [theme.breakpoints.down("sm")]: {
        letterSpacing: 1,
        fontSize: '3rem',
    },
}));

export const HomeButton = styled(Button)(() => ({
    padding: '10px 30px',
    borderRadius: '24px',
    background: Colors.white,
    color: Colors.black,
}));