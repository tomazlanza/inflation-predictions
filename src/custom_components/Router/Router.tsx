// dependencies
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { motion } from "framer-motion"
import { useState } from "react";

// components
import About from "../About/About";
import Layout from "../Layout/Layout";
import Presentation from "../Presentation/Presentation";

//objects
import aboutContent from "../../text_contents/about-content";
import presentationContent from "../../text_contents/presentation-content";


export default function Router() {

  const [language, setLanguage] = useState("english");

  const languageShifter = () => {
    language === "english" ? setLanguage("pt-br") : setLanguage("english");
  };

  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout language={language} languageShifter={languageShifter} />}>
        <Route index element={<About content={aboutContent} language={language}/>}/>
        <Route path='/presentation' element={<Presentation content={presentationContent} language={language}/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


