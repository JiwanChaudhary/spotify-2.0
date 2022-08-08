import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  BoxWrapper,
  ContainerTwoTitleOne,
  ContainerTwoTitleTwo,
  ContainerTwoWrapper,
  ContainerWrapper,
  Description,
  DescriptionBox,
  DescriptionTitle,
  GridItem,
  RoundBox,
} from "../../styles/container";

const Container = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <ContainerWrapper>
        <BoxWrapper sx={{ ml: "100px", mr: "100px" }}>
          <Typography
            variant={matches ? "h3" : "h2"}
            display={"flex"}
            justifyContent={"center"}
            sx={{ fontWeight: "bold", mb: "50px" }}
          >
            Why Spotify?
          </Typography>

          <Grid container>
            <GridItem item lg={3} md={6} sm={12}>
              <RoundBox
                src="https://i.scdn.co/image/ab671c3d0000f430678067184805befd38aa0f57"
                alt="spotify"
              />
              <DescriptionBox>
                <DescriptionTitle variant="h6">
                  Play your Favourites.
                </DescriptionTitle>
                <Description variant="body1" align={matches ? "left" : "center"}>
                  Listen to the songs you love, and discover new music and
                  podcasts.
                </Description>
              </DescriptionBox>
            </GridItem>

            <GridItem item lg={3} md={6} sm={12}>
              <RoundBox
                src="https://i.scdn.co/image/ab671c3d0000f430a6f822749d5c25c32ee31d66"
                alt="spotify"
              />
              <DescriptionBox>
                <DescriptionTitle variant="h6">
                  Playlists made easy.
                </DescriptionTitle>
                <Description variant="body1" align={matches ? "left" : "center"}>
                  We'll help you make playlists. Or enjoy playlists made by
                  music experts.
                </Description>
              </DescriptionBox>
            </GridItem>

            <GridItem item lg={3} md={6} sm={12}>
              <RoundBox
                src="https://i.scdn.co/image/ab671c3d0000f430eb43023b5332389f5094530d"
                alt="spotify"
              />
              <DescriptionBox>
                <DescriptionTitle variant="h6">Make it yours.</DescriptionTitle>
                <Description variant="body1" align={matches ? "left" : "center"}>
                  Tell us what you like, and we'll recommend music for you.
                </Description>
              </DescriptionBox>
            </GridItem>

            <GridItem item lg={3} md={6} sm={12}>
              <RoundBox
                src="https://i.scdn.co/image/ab671c3d0000f4309430062bc28461dc8fbde6bc"
                alt="spotify"
              />
              <DescriptionBox>
                <DescriptionTitle variant="h6">
                  Save mobile data.
                </DescriptionTitle>
                <Description variant="body1" align={matches ? "left" : "center"}>
                  To use less data when you play music, turn on Data Saver in
                  Settings.
                </Description>
              </DescriptionBox>
            </GridItem>
          </Grid>
        </BoxWrapper>
      </ContainerWrapper>
      <ContainerTwoWrapper>
        <ContainerTwoTitleOne variant={matches ? 'h3' : 'h2'} align="center">It's free.</ContainerTwoTitleOne>
        <ContainerTwoTitleTwo variant={matches ? 'h3' : 'h2'} align="center">No credit card required.</ContainerTwoTitleTwo>
      </ContainerTwoWrapper>
    </>
  );
};

export default Container;
