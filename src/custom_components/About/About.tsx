import { FC } from "react"

interface AboutProps {
  content: {
    [language: string]: {
      [key: string]: string
    }
  };
  language: string;
}

const About: FC<AboutProps> = ({content, language}) => {
  const keys: string[] = Object.keys(content[language])
  keys.sort();

  return (
    <section>
      <ul>
        {keys.map((key: string)=>{
          switch(key.length) {
            case 1: {
              return (
                <li className="about-title" key={key}>
                  <p>
                    <strong>
                      {content[language][key]}
                    </strong>
                  </p>
                </li>
              );
            }
            case 3: {
              return(
              <li key={key}>
                <p>
                  {content[language][key]}
                </p>
              </li>
              )
            }
            case 5: {
              return(
              <li className="de-facto-li" key={key}>
                <p>
                  {content[language][key]}
                </p>
              </li>
              )
            }
          }
        })}
      </ul>
    </section>
  )
}

export default About;