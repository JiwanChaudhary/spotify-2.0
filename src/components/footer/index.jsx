import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { ProductImage } from "../../styles/navbar";
import { Colors } from "../../styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaRecycle } from "react-icons/fa";

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="section"
      sx={{ background: Colors.black, color: Colors.white }}
    >
      <Box
        component="div"
        sx={{ padding: matches ? "50px 10px" : "70px 60px" }}
      >
        <Grid container>
          <Grid item lg={2} md={12} xs={12}>
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
          <Grid item lg={2} md={4} sm={12} xs={12}>
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
          <Grid item lg={2} md={4} sm={12} xs={12}>
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
          <Grid item lg={2} md={4} sm={12} xs={12}>
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
          <Grid item lg={2} md={12} sm={12} xs={12}>
            <Box component="div" sx={{ mt: matches ? "30px" : '0px' }}>
              <IconButton
                sx={{
                  background: "RGB(34, 35, 38)",
                  padding: "12px",
                  "&:hover": { background: "RGB(34, 35, 38)" },
                  mr: "10px",
                }}
              >
                <InstagramIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: Colors.white,
                    "&:hover": { color: Colors.green },
                  }}
                />
              </IconButton>
              <IconButton
                sx={{
                  background: "RGB(34, 35, 38)",
                  padding: "12px",
                  "&:hover": { background: "RGB(34, 35, 38)" },
                  mr: "10px",
                }}
              >
                <TwitterIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: Colors.white,
                    "&:hover": { color: Colors.green },
                  }}
                />
              </IconButton>
              <IconButton
                sx={{
                  background: "RGB(34, 35, 38)",
                  padding: "12px",
                  "&:hover": { background: "RGB(34, 35, 38)" },
                }}
              >
                <FacebookIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: Colors.white,
                    "&:hover": { color: Colors.green },
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box
          component="div"
          sx={{
            mt: "50px",
            display: matchesSM ? "block" : "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ color: Colors.white, display: matchesSM ? "block" : "flex" }}>
            <Typography
              variant="body2"
              sx={{
                mr: "20px",
                opacity: 0.6,
                "&:hover": { color: Colors.green, opacity: 1 },
                cursor: "pointer",
              }}
            >
              Legal
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mr: "20px",
                opacity: 0.6,
                "&:hover": { color: Colors.green, opacity: 1 },
                cursor: "pointer",
              }}
            >
              Privacy Center
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mr: "20px",
                opacity: 0.6,
                "&:hover": { color: Colors.green, opacity: 1 },
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mr: "20px",
                opacity: 0.6,
                "&:hover": { color: Colors.green, opacity: 1 },
                cursor: "pointer",
              }}
            >
              Cookies
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.6,
                "&:hover": { color: Colors.green, opacity: 1 },
                cursor: "pointer",
              }}
            >
              About Ads
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: "6px", mt: matchesSM ? '15px': '0px' }}>
              <IconButton
                sx={{
                  background: Colors.smokeWhite,
                  padding: "2px",
                  color: Colors.black,
                  width: "20px",
                  height: "20px",
                  mr: "10px",
                  opacity: 0.6,
                }}
              >
                <FaRecycle />
              </IconButton>
              <Typography
                varinat="body2"
                sx={{ color: Colors.white, opacity: 0.6 }}
              >
                Nepal(English)
              </Typography>
            </Box>
            <Typography
              varinat="body2"
              sx={{ color: Colors.white, opacity: 0.6 }}
            >
              © 2022 Spotify AB
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
