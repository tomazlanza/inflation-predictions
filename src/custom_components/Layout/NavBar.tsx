import { NavLink } from "react-router-dom";
import Button from "../Buttons/Buttons";
import "./navbar.css"

interface NavBarProps {
  language: string,
  languageShifter: () => void 
}

export default function NavBar(props:NavBarProps) {
  
  const {language, languageShifter} = props

  const downloadFiles = () => {
    const link = document.createElement("a");
    link.href = "inflation_predictions_files.zip";
    link.download = "inflation_predictions_files.zip";
    link.click();
    link.remove();
  };

  return (
    <div id="menu-holder">
      <nav id ='menu'>
        <NavLink to='/' className='page-shifter'>
          {language === 'english' ? 'About' : 'Sobre' }
        </NavLink>
        <NavLink to='/presentation' className='page-shifter'>
          {language === 'english' ? 'Presentation' : 'Apresentação' }
        </NavLink>
        <Button onClick={downloadFiles}>
          Download
        </Button>
          <Button onClick={languageShifter}>
            {language === 'english' ? 'Portuguese version' : 'Versão em inglês' }
        </Button>
      </nav>
    </div>
  )
}

