import { FC } from "react";
import images from '../../base64_images/base64_images.ts';

interface PresentationProps {
  content: { 
    [language: string]: {
      [key: string]: string 
    };
  };
  language: string;
}

const Presentation: FC<PresentationProps> = ({content, language}) => { 
  
  const keys: string[] = Object.keys(content[language]);
  keys.sort();
  
  // let values = Object.values(content[language]);
  
  return (

    <article>
      <ul>
        {keys.map((key: string) => {
                    
          switch (key.length) {
            case 1: {
              return (
                <li key={key} className = "hidden">
                  <h1>
                    <strong>{key + ' ' + content[language][key]}</strong>
                  </h1>
                </li>
              );
            }
            case 3: {
              return (
                <li key={key} className = "hidden">
                  <p>
                    <strong style={{ color: 'var(--main-details-color)' }}>{key}</strong>{' ' + content[language][key]}
                  </p>
                </li>
              );
            }
            case 5: {
              return (
                <li key={key} className = "hidden">
                  <p>
                    {content[language][key]}
                  </p>
                </li>
              );
            }
            case 7: {
              return (
                <div key={key} className="image-holder hidden">
                  <img src={images[language][key]}></img>
                </div>
              )
            }
          }
        })}
      </ul>
    </article>
  )
}

export default Presentation;