import React, { FC } from "react";

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
                <li key={key}>
                  <h1>
                    <strong>{key + ' ' + content[language][key]}</strong>
                  </h1>
                </li>
              );
            }
            case 3: {
              return (
                <li key={key}>
                  <p>
                    {key + ' ' + content[language][key]}
                  </p>
                </li>
              );
            }
            case 5: {
              return (
                <li key={key}>
                  <p>
                    {content[language][key]}
                  </p>
                </li>
              );
            }
          }
        })}
      </ul>
    </article>
  )
}

export default Presentation;