import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        marginTop: '50px',
        fontSize: '1.5rem'
      }}
    >
      Desenvolvido e mantido por <br />
      Iglan Cardeal <br />
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
