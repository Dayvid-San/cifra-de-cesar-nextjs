const encrypter = (text: string) => {
  const arrayText = text.toLowerCase().split('');

  const numeric = [
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

  const alpha = [
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

    if (indexAlpha !== -1) return alpha[indexAlpha + 3];

    if (indexNumeric !== -1) return numeric[indexNumeric + 3];

    return letter;
  });

  return cryptedArray.join('');
};

export default encrypter;
