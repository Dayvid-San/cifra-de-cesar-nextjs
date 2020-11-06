import React, { useState } from 'react';

// import { Container } from './styles';

interface Props {
  setActionFunction: (action: string) => void;
}

const RadioInput: React.FC<Props> = (props) => {
  const [action, setAction] = useState('crypt');

  const radioInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction(event.target.value);

    props.setActionFunction(event.target.value);
  };

  return (
    <div>
      <section>
        <p>Selecione qual ação voce deseja fazer:</p>
      </section>
      <section>
      <input
        type="radio"
        id="crypt"
        name="radio"
        value="crypt"
        checked={action === 'crypt'}
        onChange={radioInputHandler}
      />
      <label htmlFor="crypt">Encriptar texto</label>
      <br />
      <input
        type="radio"
        id="decrypt"
        name="radio"
        value="decrypt"
        checked={action === 'decrypt'}
        onChange={radioInputHandler}
      />
      <label htmlFor="decrypt">Descriptar texto</label>
      </section>
    </div>
  );
};

export default RadioInput;
