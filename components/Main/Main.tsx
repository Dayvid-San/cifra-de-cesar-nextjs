import React, { useState, useEffect } from 'react';

import styles from './Main.module.css';

const Main: React.FC = (props) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString('br')); 
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.App}>
      <h1 className={styles.MainTitle}>Aplicação da cifra de César</h1>

      <div className={styles.MainContent}>
        <figure>
          <img className={styles.Image} src="./img/cesarLogo.jpg" alt="cesar" />
          <sub>{time}</sub>
        </figure>
        <p className={styles.AppParagraph}>
          A cifra de César é uma das mais simples e conhecidas técnicas de
          criptografia. É um tipo de cifra de substituição na qual cada letra do
          texto é substituída por outra, que se apresenta no alfabeto abaixo
          dela um número fixo de vezes. Por exemplo, com uma troca de três
          posições, A seria substituído por D, B se tornaria E, e assim por
          diante. O nome do método é em homenagem a Júlio César, que o usou para
          se comunicar com os seus generais.
          <br />É claro, não necessariamente devemos seguir esta ordem de
          substituição das letras, mas podemos usar a lógica da cifra e
          trabalhar da maneira que quisermos no desenvolver da aplicação.
        </p>
      </div>

      {props.children}
    </div>
  );
};

export default Main;
