import React, { useState } from 'react';

import styles from './TextInput.module.css';

interface Props {
  action: string;
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
      {props.action === 'crypt' ? (
        <p>
          Você pode escrever e ver abaixo o texto original e o texto
          criptografado.
          <br />
          Caracteres acentuados ou especiais no seu texto não sofrerão
          alteração.
        </p>
      ) : (
        <p>
          Coloque o texto criptografado e veja-o descriptografado logo abaixo.
          <br />
          Caracteres acentuados ou especiais no seu texto não sofrerão
          alteração.
        </p>
      )}

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
        {props.action === 'crypt' ? 'Criptografar' : 'Descriptografar'}
      </button>
    </>
  );
};

export default TextInput;
