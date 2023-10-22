import { FC } from 'react';
import './buttons.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<ButtonProps> = (props) => { 
  return (
    <button onClick={props.onClick} >
      {props.children}
    </button>
  )
}

export default Button;