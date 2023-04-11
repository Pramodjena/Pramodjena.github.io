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
            textAlign="justify"
            color={useColorModeValue("gray.700", "gray.400")}
            px={5}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            style={Theme === "light" ? light : dark}
          >
            My name is Pramod Kumar Jena, and I am a dedicated Full Stack Web
            Developer based in Bhubaneswar, India. I have completed my
            Bachelor's degree in Computer Science from Rajdhani Engineering
            College. I specialize in developing quality web projects using a
            range of technologies including HTML, CSS, JavaScript, TypeScript,
            Next.js, React, Redux, Node.js, Express, MongoDB, and more. With a
            keen attention to detail, I am experienced in delivering
            user-friendly software applications within strict deadlines. I am
            passionate about learning and staying up-to-date with the latest web
            development trends and best practices. I am now seeking a
            challenging and stimulating position as a Full Stack Web Developer
            at a product-based company.
          </Text>
        </Box>
      </Center>
    </>
  );
};
