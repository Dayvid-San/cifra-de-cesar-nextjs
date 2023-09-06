import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import style from './Output.module.css';

import encrypter from './encrypter';

interface Props {
  inputText: string;
  action: string; // action defini se cryptografa ou descriptografa
  key: number;
}

const DecodedText: React.FC<Props> = (props) => {
  const [copied, setCopied] = useState(false);
  const cryptedText = encrypter(props.inputText, props.action, props.key);

  const onCopyHandler = () => {
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  useEffect(() => {
    return () => setCopied(false);
  }, []);
  
  return (
    <>
      <h2>
        {props.action === 'crypt'
          ? 'Texto criptografado'
          : 'Texto descriptografado'}
      </h2>
      <div className={style.OutputText}>
        <p className={style.OutputTextParagraph}>{cryptedText}</p>

        <CopyToClipboard text={cryptedText} onCopy={onCopyHandler}>
          <button className={style.CopyButton}>Copiar texto</button>
        </CopyToClipboard>
        <br />
        <dialog className={style.Dialog} open={copied}>
          Texto copiado!
        </dialog>
      </div>
    </>
  );
};

export default DecodedText;
