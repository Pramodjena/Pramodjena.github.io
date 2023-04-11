import { Box, Flex, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useContext } from "react";
import { AppContext } from "../Context/Theme";

export  function Contact() {
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
        style={Theme === "light" ? light : dark}
        textAlign="center"
        fontSize={{ base: "20px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
      >
        Contact
      </Text>
      <Box
        style={Theme === "light" ? light : dark}
        p={{ base: "10px", md: "30px" }}
        backgroundColor=""
        color="black"
        mt="10px"
      >
        <Text textAlign="center" fontSize={{ base: "13px", md: "16px" }}>
          Connect with me on
        </Text>
        <Flex
          w={{ base: "100%", md: "70%", lg: "50%" }}
          m="auto"
          justifyContent="space-between"
          fontSize={{ base: "22px", md: "26px", lg: "30px" }}
          mt="25px"
        >
          <Flex flexDirection="column" alignItems="center" gap={3}>
            <a
              href="https://www.linkedin.com/in/pramod-kumar-jena-851738233/"
              target="_blank"
              rel="noreferrer"
            >
              <Text>
                <BsLinkedin />
              </Text>
            </a>
            <Text fontSize={{ base: "7px", md: "11px", lg: "15px" }}>
              Pramod Kumar Jena
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <a
              href="https://github.com/Pramodjena"
              target="_blank"
              rel="noreferrer"
            >
              <Text>
                <BsGithub />
              </Text>
            </a>
            <Text fontSize={{ base: "7px", md: "11px", lg: "15px" }}>
              Pramod Kumar Jena
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <a href="tel:+917809795366">
              <Text>
                <BsFillTelephoneFill />
              </Text>
            </a>
            <Text fontSize={{ base: "7px", md: "11px", lg: "15px" }}>
              +91 7809795366
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <a href="mailto:pramoodjena@gmail.com">
              <Text>
                <GrMail />
              </Text>
            </a>
            <Text fontSize={{ base: "7px", md: "11px", lg: "15px" }}>
              pramoodjena@gmail.com
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
