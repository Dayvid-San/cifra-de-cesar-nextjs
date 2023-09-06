import { useState } from 'react';

import Head from '../components/Head/Head';
import Main from '../components/Main/Main';
import RadioInput from '../components/RadioInput/RadioInput';
import TextInput from '../components/TextInput/TextInput';
import OriginalText from '../components/OriginalText/OriginalText';
import Output from '../components/OutputText/Output';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [action, setAction] = useState('crypt');

  const getInputTextHandler = (text: string) => {
    setInputText(text);
  };

  const setActionHandler = (action: string) => {
    setAction(action);
    setInputText('');
  };

  return (
    <div>
      <Head />

      <Main>
        {/* Esse RadioInput server para definir se vai cryptar ou decryptar o texto */}
        <RadioInput setActionFunction={setActionHandler} />

        <TextInput getInputText={getInputTextHandler} action={action} />
        
        <input type="number" name="" placeholder='Digite a chave' id="" />

        {(inputText && <OriginalText originalText={inputText} />) ||
          (action === 'crypt' ? (
            <p>Escreva um texto para criptografar.</p>
          ) : (
            <p>Escreva um texto para descriptografar.</p>
          ))}

        {inputText && <Output inputText={inputText} action={action} />}
        <Footer />
      </Main>
    </div>
  );
}
