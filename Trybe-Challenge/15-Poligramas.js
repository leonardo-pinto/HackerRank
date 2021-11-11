function poligrama(word) {
  if (word.length % 2 !== 0) {
    return '';
  }

  const wordArr = word.split('');
  let rootWord = wordArr.slice(0, wordArr.length/2).join('')
  let firstWord = wordArr.slice(0, wordArr.length/2).sort();
  let secondWord = wordArr.slice(wordArr.length/2).sort();

  for (let i = 0; i <= firstWord.length; i++) {
    if (firstWord[i] !== secondWord[i]) {
      return '';
    }
  }

  return rootWord;
}

const word = 'palavra';

console.log(poligrama(word));