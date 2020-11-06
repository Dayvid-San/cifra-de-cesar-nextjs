<div align="center">
  <kbd>
    <img src="./public/img/cesarLogo.webp" height="auto" width="160" alt="medalha de cesar" style="border-radius: 50%"/>
  </kbd>
  
# Cifra de César

<br>

### Site para usar a cifra de César para encriptar/descriptar texto

</div>

<div align="center">

![version](https://img.shields.io/badge/version-1.0.0-green) ![npm](https://img.shields.io/npm/v/npm) ![node-current](https://img.shields.io/badge/nodejs-%3E%3D12.0.0-green) ![nextjs](https://img.shields.io/badge/nextjs-10.0.1-blue) ![react](https://img.shields.io/badge/react-17.0.1-blue) ![typescript](https://img.shields.io/badge/typescript-%3E%3D4.0.5-red) ![GitHub](https://img.shields.io/github/license/IglanCardeal/cifra-de-cesar-nextjs)

</div>

---

## Status do projeto

- Concluído :muscle:

- [Veja o site online aqui](https://cifra-de-cesar-nextjs.vercel.app/) 👀 :computer:

## Tabela de conteúdos

<!--ts-->

- [Sobre o projeto](#sobre)
- [Como surgiu?](#porque)
- [Onde está hospedado](#host)
- [Como usar localmente](#como-usar)
  - [Pré Requisitos](#como-usar)
- [Tecnologias](#tecnologias)
- [Performance no PageSpeed](#pagespeed)
- [Autor](#autor)
<!--te-->

### Sobre :coffee:

<p id="sobre"></p>

![tela-inicial](./public/img/cifra-cesar-home.png)

Este projeto tem como base o conceito da **cifra de César**, também conhecida como **cifra de troca**, **código de César** ou **troca de César**. A Cifra de César é uma técnica de criptografia bastante simples e provavelmente a uma mais conhecida de todas. Trata-se de um tipo de cifra de substituição, na qual cada letra de um texto a ser criptografado é substituída por outra letra, presente no alfabeto porém deslocada um certo número de posições à esquerda ou à direita. Por exemplo, se usarmos uma troca de quatro posições à esquerda, cada letra é substituída pela letra que está quatro posições adiante no alfabeto, e nesse caso a letra A seria substituída pela letra E, B por F, C por G, e assim sucessivamente.

Neste projeto, voçê pode decidir qual ação deve ser realizada, encriptar ou decriptar um texto.

- Encriptar:
  Ao selecionar esta opção, voçê insira/escreva o texto a ser criptografado e clique no botão `Criptografar`. O resultado será exibido abaixo, mostrando o texto original(seu texto) e logo abaixo o texto criptografao.
  Exemplo:
   <p align="center">Texto original</p>

   ```none
    olá mundo! hello world
   ```

   <p align="center">Texto criptografado</p>

   ```none
    roá pxqgr! khoor zruog
   ```

- Decriptar:
 Voçê usou ou recebeu uma mensagem que foi criptografada nesta aplicação, logo para vê-lo descriptografado, selecione a opção `Decriptar`. O resultado será exibido abaixo, mostrando o texto original(seu texto criptografado) e logo abaixo o texto descriptografado.

## Como surgiu a idéia?

<p id="porque"></p>

### Onde está? :rocket:

<p id="host"></p>

Este site está hospedado na plataforma [Heroku](https://dashboard.heroku.com) de forma gratuita. A plataforma usa a branch `master` deste projeto para realizar o deploy da aplicação, ou seja, qualquer alteração nesta branch irá refletir na aplicação em produção.

### Como usar localmente? :pushpin:

<p id="como-usar"></p>

Para usar localmente em sua máquina, voce deve ter instalado em sua máquina o [NodeJS](https://nodejs.org/en/) com uma versão minima recomendada `v12.0.0` e o [Git](https://git-scm.com).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
Para começar, faça o clone deste repositório. Digite o comando no terminal:

```bash
$ git clone https://github.com/IglanCardeal/velpac
```

Acesse a pasta do projeto:

```bash
$ cd velpac
```

Instale as dependências do projeto usando o `npm` ou `yarn` se preferir:

```bash
$ npm install
# ou
$ yarn install
```

Feito isso, execute o comando abaixo e o aplicativo será iniciado localmente como ambiente de desenvolvimento em sua máquina:

```bash
$ npm run dev
# ou
$ yarn dev
```

Agora abra seu navegador na URL `http://localhost:3000` e verá a página inicial do projeto.

### Quais tecnologias foram usadas? :wrench:

<p id="tecnologias"></p>

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/) (Framework web)
- [Ejs](https://ejs.co/) (Template engine)
- [Lazyload](https://www.npmjs.com/package/lazyload) (Otimizar carregamento de imagens)
- [Bootstrap](https://getbootstrap.com/) (Framework CSS)
- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com/)

### Performance da aplicação no [PageSpeed](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br)

<p id="pagespeed"></p>

- Mobile
  ![mobile performance](./public/img/cifra-cesar-ps-mobile.png)

- Desktop
  ![desktop performance](./public/img/cifra-cesar-ps-desktop.png)

### Autor

<p id="autor"></p>

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/37749943?s=460&u=70f3bf022f3a0f28c332b1aa984510910818ef02&v=4" width="100px;" alt="iglan cardeal"/>

<b>Iglan Cardeal</b>
</a>

Desenvolvido e mantido por Iglan Cardeal :hammer:
Desenvolvedor NodeJS 💻 <br>
Entre em contato! 👋🏽

- cmtcardeal@outlook.com :email:
- Instagram [@cmtcardeal](https://www.instagram.com/cmtecardeal/)
- StackOverflow [Cmte Cardeal](https://pt.stackoverflow.com/users/95771/cmte-cardeal?tab=profile)
