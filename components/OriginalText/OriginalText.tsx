import React from 'react';

import styles from './OriginalText.module.css';

interface Props {
  originalText: string;
}

const OriginalText: React.FC<Props> = (props) => {
  return (
    <>
      <h2>Texto original</h2>
      <div className={styles.OriginalText}>
        <p>{props.originalText}</p>
      </div>
    </>
  );
};

export default OriginalText;
