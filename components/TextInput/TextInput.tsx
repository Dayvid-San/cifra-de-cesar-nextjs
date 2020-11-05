import React from 'react';

import styles from './TextInput.module.css';

const TextInput: React.FC = () => {
  return (
    <>
      <p>
        Você pode escrever e ver abaixo o texto original e o texto
        criptografado.
        <br /> Não utilize caracteres acentuados ou especiais no seu texto.
      </p>
      <label htmlFor="input-text">Digite algo abaixo:</label>
      <br/>
      <textarea
        className={styles.InputText}
        rows={5}
        cols={15}
        id="input-text"
      />
    </>
  );
};

export default TextInput;
