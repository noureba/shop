import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Button } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const sliders = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dia3y316g/image/upload/v1655988903/shop/slider/1_sp7ex7.jpg",
    title: "Welcome in our store",
    desc: "SAVE 50%",
    btnTitle: "shop now",
    btnLink: "",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dia3y316g/image/upload/v1655988903/shop/slider/2_fqwqgz.jpg",
    title: "Free shipping",
    desc: "",
    btnTitle: "SHOP NOE",
    btnLink: "",
  },
];
function Slider() {
  return (
    <Box>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Image src={slider.img} alt="slide" width="1300" height="600" />
            <Box
              sx={{
                position: "absolute",
                background: "rgb(0, 0, 0, 0.5)",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: "600px",
                  textAlign: 'center'
                }}
              >
                <Typography
                  color="white"
                  variant="h4"
                  sx={{ margin: "10px" }}
                >
                  {slider.title}
                </Typography>
                <Typography
                  color="white"
                  variant="h6"
                  sx={{ margin: "10px" }}
                >
                  {slider.desc}
                </Typography>
                <Button variant="contained" color="info" sx={{ 
                  margin: "10px",
                  padding:"10px 20px",
                }}>
                  {slider.btnTitle}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
