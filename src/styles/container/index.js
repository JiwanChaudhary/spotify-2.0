import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const ContainerWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    background: Colors.white,
    padding: '50px 0px',
}));

export const BoxWrapper = styled(Box)(({ theme }) => ({
    marginLeft: '100px',
    marginRight: '100px',
    [theme.breakpoints.down("md")]: {
        marginLeft: '30px',
        marginRight: '30px',
    }
}));


export const RoundBox = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '142px',
    width: '142px',
    marginBottom: '35px',
    [theme.breakpoints.down("md")]: {
        height: '100px',
        width: '100px',
        marginBottom: '0px',
        marginRight: '40px',
    },

    [theme.breakpoints.down("sm")]: {
        marginRight: '20px',
    },
}));

export const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px',
    [theme.breakpoints.down("md")]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '0px',
        marginBottom: "30px",
    },
}));

export const DescriptionBox = styled(Grid)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

}));

export const DescriptionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "600",
    marginBottom: "5px",
    [theme.breakpoints.down("md")]: {
        marginBottom: "0px",
    }
}));


export const Description = styled(Typography)(({ theme }) => ({
    fontWeight: "500",
}));