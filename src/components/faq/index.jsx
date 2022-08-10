import {
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordianTitle, AccordianWrapper, AccordionContent, AccordionContentSummary, AccordionTypography } from "../../styles/faq";
import { BoxWrapper } from "../../styles/container";

const Faq = () => {
  return (
    <>
      <AccordianWrapper>
        <BoxWrapper sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <AccordianTitle variant="h3">Got Questions?</AccordianTitle>
        <AccordionContent sx={{width: '100%'}}>
          <AccordionContentSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <AccordionTypography variant="h6">How do I create a playlist?</AccordionTypography>
          </AccordionContentSummary>
          <AccordionDetails>
            <Typography sx={{mt: '20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </AccordionContent>
        <AccordionContent >
          <AccordionContentSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <AccordionTypography variant="h6">How do I activate Data Saver mode?</AccordionTypography>
          </AccordionContentSummary>
          <AccordionDetails>
            <Typography sx={{mt: '20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </AccordionContent>  
        <AccordionContent >
          <AccordionContentSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <AccordionTypography variant="h6">Is it only possible to shuffle play music?</AccordionTypography>
          </AccordionContentSummary>
          <AccordionDetails>
            <Typography sx={{mt: '20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </AccordionContent>  
        <AccordionContent >
          <AccordionContentSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <AccordionTypography variant="h6">Where can I find Podcasts?</AccordionTypography>
          </AccordionContentSummary>
          <AccordionDetails>
            <Typography sx={{mt: '20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </AccordionContent>  
        </BoxWrapper>
      </AccordianWrapper>
    </>
  );
};

export default Faq;
