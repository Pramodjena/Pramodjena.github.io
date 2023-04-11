import { Navbar } from "./Components/Navbar";
import { Skills } from "./Pages/Skills";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { useContext, useRef } from "react";
import { AppContext } from "./Context/Theme.jsx";

import { Box } from "@chakra-ui/react";
import { Project } from "./Pages/Project";
import { Github } from "./Pages/Github";
function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  const { Theme } = useContext(AppContext);

  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  const HandleScrollTo = (ref) => {
    const sectionTop = ref.current.offsetTop;
    window.scrollTo({
      top: sectionTop - 60, // subtract 60 pixels to account for the navbar height
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" style={Theme === "light" ? light : dark}>
      <Navbar
        ProfileRef={() => HandleScrollTo(ProfileRef)}
        AboutRef={() => HandleScrollTo(AboutRef)}
        SkillsRef={() => HandleScrollTo(SkillsRef)}
        ProjectsRef={() => HandleScrollTo(ProjectRef)}
        ContactRef={() => HandleScrollTo(ContactRef)}
      />

      <Box ref={ProfileRef}>
        <Home />
      </Box>

      <Box mt={{ base: "0%", md: "7%", lg: "none" }} ref={AboutRef}>
        <About />
      </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "5%" }} ref={SkillsRef}>
        <Skills />
      </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "5%" }} ref={ProjectRef}>
        <Project />
      </Box>
      <Box mt={{ base: "10%", md: "7%", lg: "5%" }}>
        <Github />
      </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "5%" }} ref={ContactRef}>
        <Contact />
      </Box>
    </div>
  );
}

export default App;
