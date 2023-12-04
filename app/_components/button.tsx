'use client';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'info' | 'error';

export interface ButtonProps {
  variant: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
  onClick:() => void;
}


const Button: React.FC<ButtonProps> = ({ variant, className, children,onClick }) => {
  const buttonStyle:Record<ButtonVariant,string> = {
    primary: 'bg-primary-purple hover:bg-primary-light-purple',
    secondary: 'bg-dark-blue hover:bg-light-blue',
    info: 'bg-night-sky-blue hover:bg-night-sky-blue-light',
    error: 'bg-error hover:bg-error-light'
  }
  
  return <button className={clsx('text-white rounded-primary font-bold text-sm px-4 py-2.5 cursor-pointer tablet:px-6 tablet:py-3',buttonStyle[variant],className)} onClick={onClick}>
    {children}
  </button>;


}


export default Button;
