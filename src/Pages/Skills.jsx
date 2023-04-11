import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useContext } from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";
import html from "./SkillsImage/html1.png";
import css from "./SkillsImage/css.png";
import js from "./SkillsImage/js.png";
import mongodb from "./SkillsImage/mongodb.png";
import npm from "./SkillsImage/npm.png";
import redux from "./SkillsImage/redux.png";
import react from "./SkillsImage/react.png";
import typescript from "./SkillsImage/typescript.png";
import github from "./SkillsImage/github.png";
import git from "./SkillsImage/git.png";
import express from "./SkillsImage/express.png";
import node from "./SkillsImage/node.png";

export const Skills = () => {
  const { Theme } = useContext(AppContext);
  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Text
        fontSize={{ base: "22px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        textAlign="center"
      >
        Skills
      </Text>
      <Box w="80%" m="auto">
        <Slider {...settings} style={Theme === "light" ? light : dark}>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "80px", lg: "80px" }} src={html} />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "60px", lg: "60px" }} src={css} />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "80px", lg: "80px" }} src={js} />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "80px", lg: "80px" }} src={react} />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "80px", lg: "80px" }} src={redux} />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "80px", lg: "80px" }} src={npm} />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image
                w={{ base: "65px", md: "140px", lg: "140px" }}
                src={node}
              />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image
                w={{ base: "45px", md: "80px", lg: "80px" }}
                src={mongodb}
              />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image
                w={{ base: "65px", md: "140px", lg: "140px" }}
                src={express}
              />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image
                w={{ base: "45px", md: "80px", lg: "80px" }}
                src={typescript}
              />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image
                w={{ base: "45px", md: "80px", lg: "80px" }}
                src={github}
              />
            </Box>
          </div>
          <div style={{ display: "flex", width: "50px", height: "150px" }}>
            <Box
              p="20px"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#f4f4f4"
              mr={5}
            >
              <Image w={{ base: "45px", md: "80px", lg: "80px" }} src={git} />
            </Box>
          </div>
        </Slider>
      </Box>
    </>
  );
};
