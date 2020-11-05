import React from 'react';

import styles from './OriginalText.module.css';

const OriginalText: React.FC = () => {
  return (
    <div className={styles.OriginalText}>
      <h2>Texto original</h2>
      <p>{'text'}</p>
    </div>
  );
};

export default OriginalText;
