import { AccordionDetails, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordianTitle,
  AccordianWrapper,
  AccordionContent,
  AccordionContentSummary,
  AccordionTypography,
} from "../../styles/faq";
import { BoxWrapper } from "../../styles/container";

const Faq = () => {
  return (
    <>
      <AccordianWrapper>
        <BoxWrapper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <AccordianTitle variant="h3">Got Questions?</AccordianTitle>
          <AccordionContent sx={{ width: "100%" }}>
            <AccordionContentSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography variant="h6">
                How do I create a playlist?
              </AccordionTypography>
            </AccordionContentSummary>
            <AccordionDetails>
              <Typography sx={{ pt: "10px" }}>
                <Typography
                  variant="body1"
                  sx={{ pb: "20px", fontWeight: 500 }}
                >
                  Playlists are a great way to save collections of music, either
                  for your own listening or to share.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ pb: "20px", fontWeight: 500 }}
                >
                  To create one:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  1. Tap Your Library.
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  2. Tap{" "}
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: 500, color: "RGB(17, 122, 55)" }}
                  >
                    CREATE.
                  </Typography>{" "}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  3. Give your playlist a name.
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  4. Start adding songs (and we'll help you along).
                </Typography>
              </Typography>
            </AccordionDetails>
          </AccordionContent>
          <AccordionContent>
            <AccordionContentSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <AccordionTypography variant="h6">
                How do I activate Data Saver mode?
              </AccordionTypography>
            </AccordionContentSummary>
            <AccordionDetails>
              <Typography sx={{ mt: "20px" }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  1. Tap{" "}
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: 500, color: "RGB(17, 122, 55)" }}
                  >
                    Home.
                  </Typography>{" "}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  2. Tap{" "}
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: 500, color: "RGB(17, 122, 55)" }}
                  >
                    Settings.
                  </Typography>{" "}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  3. Tap{" "}
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: 500, color: "RGB(17, 122, 55)" }}
                  >
                    Data Saver.
                  </Typography>{" "}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  4.Switch on Data Saver.{" "}
                </Typography>
              </Typography>
            </AccordionDetails>
          </AccordionContent>
          <AccordionContent>
            <AccordionContentSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <AccordionTypography variant="h6">
                Is it only possible to shuffle play music?
              </AccordionTypography>
            </AccordionContentSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ mt: "20px", mb: "10px", fontWeight: 500 }}
              >
                Any playlist with the shuffle icon will play on shuffle.
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Some playlists won't have the shuffle icon, so you can tap any
                song to play it.
              </Typography>
            </AccordionDetails>
          </AccordionContent>
          <AccordionContent>
            <AccordionContentSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <AccordionTypography variant="h6">
                Where can I find Podcasts?
              </AccordionTypography>
            </AccordionContentSummary>
            <AccordionDetails>
              <Typography sx={{ mt: "20px", fontWeight: 500 }}>
                Tap{" "}
                <Typography
                  component="span"
                  sx={{ fontWeight: 500, color: "RGB(17, 122, 55)" }}
                >
                  Search.{" "}
                </Typography>
                Under{" "}
                <Typography
                  component="span"
                  sx={{ fontWeight: 500, color: "RGB(17, 122, 55)" }}
                >
                  Browse All
                </Typography>
                , tap Podcasts.
              </Typography>
            </AccordionDetails>
          </AccordionContent>
        </BoxWrapper>
      </AccordianWrapper>
    </>
  );
};

export default Faq;
