import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./layout.css"

interface LayoutProps {
  language: string,
  languageShifter: () => void,
}

export default function Layout(props:LayoutProps) {

  const {language, languageShifter} = props

  return(
    <div id="content-main-wrapper">
      <NavBar language={language} languageShifter={languageShifter}/>
      <Outlet />
    </div>
  )
}