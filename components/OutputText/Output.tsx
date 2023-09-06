const encrypter = (text: string, action: string, key: number): string => {
  const arrayText = text.toLowerCase().split('');

  const numeric: string[] = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '1',
      '2',
  ];

  const alpha: string[] = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'a',
      'b',
      'c',
  ];

  const cryptedArray = arrayText.map((letter: string) => {
      const indexAlpha = alpha.indexOf(letter);
      const indexNumeric = numeric.indexOf(letter);

      if (action === 'crypt') {
          if (indexAlpha !== -1) return alpha[(indexAlpha + key) % alpha.length];

          if (indexNumeric !== -1) return numeric[(indexNumeric + key) % numeric.length];
      }

      if (action === 'decrypt') {
          if (indexAlpha !== -1) {
              if (indexAlpha < key) {
                  const newIndex = alpha.length - (key - indexAlpha);
                  return alpha[newIndex];
              }

              return alpha[indexAlpha - key];
          }

          if (indexNumeric !== -1) {
              if (indexNumeric < key) {
                  const newIndex = numeric.length - (key - indexNumeric);
                  return numeric[newIndex];
              }

              return numeric[indexNumeric - key];
          }
      }

      return letter;
  });

  return cryptedArray.join('');
};

export default encrypter;