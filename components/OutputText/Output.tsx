import React from 'react';

import style from './Decoded.module.css';

const DecodedText: React.FC = () => {
  const encrypter = (text: string) => {
    return text;
  };

  let cryptedText = encrypter('text');

  return (
    <div className={style.OuputText}>
      <h2>Texto criptografado</h2>
      <p className={style.OuputTextParagraph}>{cryptedText}</p>
    </div>
  );
};

export default DecodedText;
