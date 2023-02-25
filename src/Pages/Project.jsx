import React, { useContext } from "react";
import { Box, Image, Badge, Text, Flex } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";
import { FaGithub, FaSourcetree } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

export const Project = () => {
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
    <Box>
      <Text>
        <Text
          textAlign="center"
          color=""
          fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
        >
          My Projects
        </Text>
      </Text>

      <Box
        w={"80%"}
        display={{ base: "column", sm: "column", lg: "grid" }}
        gridTemplateColumns="repeat(2,1fr)"
        m={"auto"}
        mt="20px"
        gap={20}
      >
        {/* First Project */}
        <Text left>
          <Box
            style={Theme === "light" ? light : dark}
            w={"100%"}
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"white"}
            mb={10}
          >
            <Image
              w="full"
              src="" // Will fill soon
              alt=""
              h={{ lg: "300px" }}
            />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Project
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                repudiandae doloremque fugiat, cum obcaecati dolores eum totam
                ea a placeat eos eius sed nulla maxime illo vitae dolorum magnam
                praesentium.
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  borderRadius="full"
                  px="2"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                >
                  TECH STACK
                </Badge>
                <Box
                  display={{ base: "grid", sm: "grid", lg: "flex" }}
                  gridTemplateColumns="repeat(1,1fr)"
                  gap={1}
                >
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    HTML
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    CSS
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Javascript
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  ></Box>
                </Box>
              </Box>
            </Box>
            <Flex gap={10} alignItems="center" mb={5} ml={7}>
              <a href="">
                <FaGithub size={35} />
              </a>
              <a href="">
                <GrDeploy size={30} />
              </a>
            </Flex>
          </Box>
        </Text>

        {/* {second} */}
        <Text right>
          <Box
            style={Theme === "light" ? light : dark}
            w={"100%"}
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"white"}
            mb={10}
          >
            <Image w="full" src="" alt="" h={{ lg: "300px" }} />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Project
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                quod ex, alias esse et voluptatibus recusandae corporis nobis
                accusamus non totam! Itaque, qui? Delectus error repellendus
                maxime architecto soluta magni?
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  borderRadius="full"
                  px="2"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                >
                  TECH STACK
                </Badge>
                <Box
                  display={{ base: "grid", sm: "grid", lg: "flex" }}
                  gridTemplateColumns="repeat(1,1fr)"
                  gap={1}
                >
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    HTML
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    CSS
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Javascript
                  </Box>
                </Box>
              </Box>
            </Box>
            <Flex gap={10} alignItems="center" mb={5} ml={7}>
              <a href="">
                <FaGithub size={35} />
              </a>
              <a href="">
                <GrDeploy size={30} />
              </a>
            </Flex>
          </Box>
        </Text>
      </Box>
    </Box>
  );
};
