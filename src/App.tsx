import { FC, useState } from 'react'
import './App.css'
import Button from '../src/custom_components/Buttons/Buttons.tsx'
import './custom_components/Buttons/buttons.css'
import './index.css'
import Presentation from './custom_components/Presentation/Presentation.tsx'
import About from '../src/custom_components/About/About.tsx'
import aboutContent from './text_contents/about-content.ts'
import presentationContent from './text_contents/presentation-content.ts'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


////// 
///////////// APP //////////////////////
const App: FC = () => {

  const [language, setLanguage] = useState('english');
  
  const languageShifter = () => {    
    language === 'english'
    ? setLanguage('pt-br')
    : setLanguage('english')
  }

  console.log(language);
  
  return (
    <Router>
        <nav id ='menu'>
          <Link to='/about' className='page-shifter'>
            About
          </Link>
          <Link to='/presentation' className='page-shifter'>
            Presentation
          </Link>
          <Button>
            Download
          </Button>
          <Button onClick={languageShifter}>
            Language
          </Button>
        </nav>
        <main>
          <Routes>
            <Route path='/about' element={<About content={aboutContent} language={language}/>}/>
            <Route path='/presentation' element={<Presentation content={presentationContent} language={language}/>}/>
          </Routes>
        </main>
    </Router>
  )
}

//////////////////////////////////////////


export default App;