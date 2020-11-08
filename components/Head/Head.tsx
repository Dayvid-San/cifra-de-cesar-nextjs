import React from 'react';
import Head from 'next/head';

const MetaHead: React.FC = () => {
  return (
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
  );
};

export default MetaHead;
