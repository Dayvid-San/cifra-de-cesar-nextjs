import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        marginTop: '150px',
        fontSize: '1.0rem'
      }}
    >
      Desenvolvido e mantido por <br />
      Iglan Cardeal <br />
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
