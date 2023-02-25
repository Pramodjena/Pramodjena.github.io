import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/Theme";

export const About = () => {
  const { Theme } = useContext(AppContext);

  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <Text
        color=""
        fontSize={{ base: "22px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        textAlign="center"
        margin={5}
        marginTop={-50}
      >
        About Me
      </Text>
      <Center style={Theme === "light" ? light : dark}>
        <Box
          style={Theme === "light" ? light : dark}
          maxW={{ base: "350px", md: "450px", lg: "600px", xl: "800px" }}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          rounded={"lg"}
          textAlign={"center"}
        >
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={5}
            fontSize="20"
            style={Theme === "light" ? light : dark}
          >
            Dedicated and detail-oriented Full stack web developer. Skilled in
            developing quality projects using HTML, CSS, JS, React, etc. Has
            expertise in delivering user-friendly software applications within
            strict deadlines. Looking to secure a stimulating position in
            product base company as a Full stack web Developer.
          </Text>
        </Box>
      </Center>
    </>
  );
};
