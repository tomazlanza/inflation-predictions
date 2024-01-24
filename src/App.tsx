import { FC, useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Button from '../src/custom_components/Buttons/Buttons.tsx'
import aboutContent from './text_contents/about-content.ts'
import presentationContent from './text_contents/presentation-content.ts'
import './custom_components/Buttons/buttons.css'
import './App.css'

//pages
import Presentation from './custom_components/Presentation/Presentation.tsx'
import About from '../src/custom_components/About/About.tsx'


///////////// APP //////////////////////
const App: FC = () => {

  const [language, setLanguage] = useState('english');
  // const [initialLoad, setInitialLoad] = useState(true);
  // const navigate = useNavigate();

  // const simulateLinkClick = (path: string) => {
  //   navigate(path);
  // };

  // console.log(initialLoad);

  // useEffect(() => {
  //   if (initialLoad) {
  //     console.log(!initialLoad);
  //     console.log('the app has initialized');
  //     setInitialLoad(false);
  //     console.log(initialLoad);
  //   }
  // }, []);

  ///// creating functions to be used by nav menu buttons ////
  const languageShifter = () => {    
    language === 'english'
    ? setLanguage('pt-br')
    : setLanguage('english')
  }

  const downloadFiles = () => {
    const link = document.createElement('a');
    link.href = '../inflation_predictions_files.zip';
    link.download = 'inflation_predictions_files.zip';
    link.click();
    link.remove();
  }
  ////////////


  ///// scroll-observing object to allow fade-in animations ////
  // const observer = new IntersectionObserver((allElements) => {
  //   allElements.forEach((element) => {
  //     console.log(element);
  //     element.isIntersecting ? element.target.classList.add('show') : null;
  //    }
  //   )
  //  }
  // );

  // const allElements = document.querySelectorAll('.hidden');

  // allElements.forEach(
  //   (element) => {
  //     console.log(element);
  //     observer.observe(element);
  //   }
  // );
  /////////////

  return (
    <Router>
        <header>
          <nav id ='menu'>
            <Link to='/about' className='page-shifter'>
              {language === 'english' ? 'About' : 'Sobre' }
            </Link>
            <Link to='/presentation' className='page-shifter'>
              {language === 'english' ? 'Presentation' : 'Apresentação' }
            </Link>
            <Button onClick={downloadFiles}>
              Download
            </Button>
            <Button onClick={languageShifter}>
              {language === 'english' ? 'Portuguese version' : 'Versão em inglês' }
            </Button>
          </nav>
        </header>
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