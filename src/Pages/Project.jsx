import React, { useContext } from "react";
import { Box, Image, Badge, Text, Flex, Button } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";
import Myntra_Project from "./ProjectImages/Myntra_Project.png";
import Cricinfo_Project from "./ProjectImages/Cricinfo_Project.png";

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
              src={Cricinfo_Project}
              alt="Cricinfo_Project"
              h={{ lg: "300px" }}
            />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Cricinfo
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Cricinfo is a user-friendly website providing global cricket
                coverage with live scores, news, analysis, and expert opinions.
                With team rankings, player statistics, and match coverage.
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  colorScheme="teal"
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
            <Flex
              gap={10}
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              ml={7}
            >
              <a
                href="https://github.com/rahulohol/tranquil-engine-3054"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Source Code
                </Button>
              </a>
              <a
                href="https://magenta-capybara-74b5f2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Deploy URL
                </Button>
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
            <Image
              w="full"
              src={Myntra_Project}
              alt="Myntra_Project"
              h={{ lg: "300px" }}
            />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Myntra
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Myntra is an Indian e-commerce fashion platform offering
                clothing, accessories, and footwear for men, women, and
                children. With a user-friendly interface and convenient payment
                options.
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  colorScheme="teal"
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
                  >
                    React
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Redux
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Chakra
                  </Box>
                </Box>
              </Box>
            </Box>
            <Flex
              gap={10}
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              ml={7}
            >
              <a
                href="https://github.com/madhurn29/gold-kick-1985/tree/main/myntra-clone"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Source Code
                </Button>
              </a>
              <a
                href="https://myntra-clone-iota.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Deploy URL
                </Button>
              </a>
            </Flex>
          </Box>
        </Text>
      </Box>
    </Box>
  );
};
