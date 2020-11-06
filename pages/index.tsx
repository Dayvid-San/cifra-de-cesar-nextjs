import Head from 'next/head';
import { useEffect, useState } from 'react';

import Main from '../components/Main/Main';
import RadioInput from '../components/RadioInput/RadioInput';
import TextInput from '../components/TextInput/TextInput';
import OriginalText from '../components/OriginalText/OriginalText';
import Output from '../components/OutputText/Output';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [action, setAction] = useState('');

  const getInputTextHandler = (text: string) => {
    setInputText(text);
  };

  const setActionHandler = (action: string) => {
    setAction(action);
  };

  useEffect(() => {
    setInputText('')
  }, [action]);

  return (
    <div>
      <Head>
        <title>Cifra de César</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Aplicação da cifra de César para criptografar e descriptografar texto"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="author" content="Iglan Cardeal" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, ReactDOM, NextJS, César, Cifra, Criptografia"
        />
        <link
          href="https://fonts.googleapis.com/css?family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main>
        {/* Esse RadioInput server para definir se vai cryptar ou decryptar o texto */}
        <RadioInput setActionFunction={setActionHandler} />

        <TextInput getInputText={getInputTextHandler} action={action} />

        {(inputText && <OriginalText originalText={inputText} />) ||
          (action === 'crypt' ? (
            <p>Escreva um texto para criptografar.</p>
          ) : (
            <p>Escreva um texto para descriptografar.</p>
          ))}

        {inputText && action !== '' && <Output inputText={inputText} action={action} />}

        <Footer />
      </Main>
    </div>
  );
}
