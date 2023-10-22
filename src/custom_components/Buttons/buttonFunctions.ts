import { renderPage } from '../../App';
import { currentPage, selectedLanguage, languageShifter } from "./Buttons";


interface buttonFunctionsType {
  [typeOfFunction: string]: Function;
}

const buttonFunctions: buttonFunctionsType = {
  'pageShifter': () => {
    renderPage(currentPage, selectedLanguage);
  },
  
  'downloadFunction': () => {
    return;
  },

  'languageFunction': () => {
    languageShifter();
    renderPage(currentPage, selectedLanguage);
  },
}

// export type ButtonFunctionsMethods = keyof typeof buttonFunctions

export default buttonFunctions;