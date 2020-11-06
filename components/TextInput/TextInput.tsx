import React, { FormEvent, ReactChildren, ReactNode, useState } from 'react';

import styles from './TextInput.module.css';

interface Props {
  getInputText: (text: string) => void;
}

const TextInput: React.FC<Props> = (props) => {
  const [textInput, setTextInput] = useState('');

  const changeTextHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value);
  };

  const buttonClickHandler = () => {
    props.getInputText(textInput.trim().toLowerCase());
    setTextInput('');
  };

  return (
    <>
      <p>
        Você pode escrever e ver abaixo o texto original e o texto
        criptografado.
        <br />
        Caracteres acentuados ou especiais no seu texto não sofrerão alteração.
      </p>
      <label htmlFor="input-text">Digite algo abaixo:</label>
      <br />
      <textarea
        className={styles.InputText}
        rows={5}
        cols={15}
        id="input-text"
        onChange={changeTextHandler}
        value={textInput}
      />
      <br />
      <button className={styles.Button} onClick={buttonClickHandler}>
        Criptografar
      </button>
    </>
  );
};

export default TextInput;
