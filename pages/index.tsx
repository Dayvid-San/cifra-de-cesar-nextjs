import { useState } from 'react';

import Main from '../components/Main/Main';
import TextInput from '../components/TextInput/TextInput';
import OriginalText from '../components/OriginalText/OriginalText';
import Output from '../components/OutputText/Output';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [inputText, setInputText] = useState('');

  const getInputTextHandler = (text: string) => {
    setInputText(text);
  };

  return (
    <Main>
      <TextInput getInputText={getInputTextHandler} />

      {(inputText && <OriginalText originalText={inputText} />) || (
        <p>Escreva um texto para criptografar.</p>
      )}

      {inputText && <Output inputText={inputText} />}

      <Footer />
    </Main>
  );
}
