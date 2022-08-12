import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";



export const AccordianWrapper =styled(Box)(({theme}) => ({
    padding: '50px 0px',
}));

export const AccordianTitle = styled(Typography)(() => ({
    padding: '60px 0px',
    color: Colors.black,
    fontWeight: '500',
}));

export const AccordionContent = styled(Accordion)(() => ({
    '& .Mui-expanded': {
        margin: 0,
    },
    width: '100%',
    padding: '15px',
    marginBottom: 0,
    
}));

export const AccordionContentSummary = styled(AccordionSummary)(() => ({
    '&:hover':{
        background: "#f5f5f5",
        textDecoration: 'underline',
    },
}));

export const AccordionTypography = styled(Typography)(() => ({
    fontWeight: '500',
}));