import React from 'react';
import styles from './ButtonBlue.module.css'

type typeButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  padding?: number;
}

const ButtonBlue: React.FC<typeButtonProps> = ({ type, children, onClick, padding }) => {
  return (
    <button style={{padding: padding}} onClick={onClick} type={type} className={styles.btn}>
      {children}
    </button>
  );
}

export default ButtonBlue;
