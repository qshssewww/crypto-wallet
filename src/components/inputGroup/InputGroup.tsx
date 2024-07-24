import React from 'react';
import styles from './InputGroup.module.css'

type typeInputGroupProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  autoComplete: string
}

const InputGroup: React.FC<typeInputGroupProps> = ({ id, label, type, value, setValue, autoComplete }) => {

  
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        id={id}
        required 
      />
    </div>
  );
}

export default InputGroup;
