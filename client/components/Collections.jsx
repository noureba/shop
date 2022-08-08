import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const allCollections = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dia3y316g/image/upload/v1655996040/shop/collections/2_kscgtk.jpg",
    title: "jewelery",
    width: "25%",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dia3y316g/image/upload/v1655996035/shop/collections/1_gebxat.jpg",
    title: "electronics",
    width: "25%",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dia3y316g/image/upload/v1655996039/shop/collections/3_iccjyv.jpg",
    title: "men's clothing",
    width: "25%",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dia3y316g/image/upload/v1655996034/shop/collections/4_qpciux.jpg",
    title: "women's clothing",
    width: "25%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  flexGrow: "1",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Collections() {
  return (
    <Box
      sx={{
        maxWidth: '1300px',
        margin: "100px auto",
      }}
    >
      <Typography variant="h4" align="center" sx={{margin: '20px'}} color="text.primary">Collections</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          maxWidth: "1300px",
        }}
      >
        {allCollections.map((collection) => (
          <ImageButton
            key={collection.id}
            focusRipple
            style={{
              width: collection.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${collection.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {collection.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Box>
  );
}
