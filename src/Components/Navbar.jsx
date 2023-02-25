import logo from "../assets/Pramod_Logo2.gif";
import { useContext } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AppContext } from "../Context/Theme";

export const Navbar = ({
  ProfileRef,
  AboutRef,
  SkillsRef,
  ProjectsRef,
  ContactRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Theme, ToggleTheme } = useContext(AppContext);

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
      <Box
        pos="fixed"
        w="100%"
        zIndex="99"
        px={4}
        style={Theme === "light" ? light : dark}
        className="ChackraNavBar nav-menu"
        shadow="lg"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            style={Theme === "light" ? light : dark}
            size="lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="30px" />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            w="90%"
            m={"auto"}
          >
            <Box p="5px">
              <Image
                width={{ base: "62px", md: "62px" }}
                src={logo}
                marginTop={-1}
              />
            </Box>
            <Flex
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              gap="10px"
              w={{ base: "", md: "60%", lg: "40%" }}
              justifyContent="space-between"
              alignItems="center"
              color=""
              fontWeight="650"
            >
              <Text onClick={ProfileRef} cursor="pointer">
                Home
              </Text>
              <Text onClick={AboutRef} cursor="pointer">
                About
              </Text>
              <Text onClick={SkillsRef} cursor="pointer">
                Skills
              </Text>
              <Text onClick={ProjectsRef} cursor="pointer">
                Project
              </Text>
              <Text onClick={ContactRef} cursor="pointer">
                Contact
              </Text>

              <a
                href="https://drive.google.com/file/d/1dBKVFFS6blc0CvPrwNRhZv_w7IAv3SB5/view?usp=sharing"
                download
                onclick="window.open('https://drive.google.com/file/d/1dBKVFFS6blc0CvPrwNRhZv_w7IAv3SB5/view?usp=sharing')"
              >
                <Text>Resume</Text>
              </a>
            </Flex>
          </Flex>
          <Box width="5%" justifyContent={"center"} display="flex">
            <Text onClick={ToggleTheme} cursor="pointer">
              {Theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
            </Text>
          </Box>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            style={Theme === "light" ? light : dark}
          >
            <Stack as={"nav"} spacing={4} color="#3197" fontWeight="600">
              <Text onClick={ProfileRef} cursor="pointer">
                Home
              </Text>
              <Text onClick={AboutRef} cursor="pointer">
                About
              </Text>
              <Text onClick={SkillsRef} cursor="pointer">
                Skills
              </Text>
              <Text onClick={ProjectsRef} cursor="pointer">
                Project
              </Text>
              <Text onClick={ContactRef} cursor="pointer">
                Contact
              </Text>
              <a href="https://drive.google.com/file/d/1dBKVFFS6blc0CvPrwNRhZv_w7IAv3SB5/view?usp=sharing">
                <Text cursor="pointer">Resume</Text>
              </a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
