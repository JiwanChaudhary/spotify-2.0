import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { ProductImage } from "../../styles/navbar";
import { Colors } from "../../styles/theme";

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="section"
      sx={{ background: Colors.black, color: Colors.white }}
    >
      <Box
        component="div"
        sx={{ padding: matches ? "50px 10px" : "90px 60px" }}
      >
        <Grid container>
          <Grid item lg={2}>
            <Box
              display={"flex"}
              alignItems="center"
              sx={{ pt: "4px", pb: "4px" }}
            >
              <ProductImage
                src="/images/lo.png"
                alt="logo"
                sx={{ mr: "5px", height: "40px", width: "40px" }}
              />
              <Typography variant="h5" sx={{ cursor: "pointer" }}>
                Spotify
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Typography sx={{ opacity: 0.6, mt: "20px", mb: "20px" }}>
              COMPANY
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Jobs
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              For the Record
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography sx={{ opacity: 0.6, mt: "20px", mb: "20px" }}>
              COMMUNITIES
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              For Artists
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Developers
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Advertising
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Investors
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Vendors
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography sx={{ opacity: 0.6, mt: "20px", mb: "20px" }}>
              USEFUL LINKS
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                mb: "20px",
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Web Player
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                transition: 0.3,
                "&:hover": { color: Colors.green },
              }}
            >
              Free Mobile App
            </Typography>
          </Grid>
          <Grid item lg={2}></Grid>
          <Grid item lg={2}>
            Spotify
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
