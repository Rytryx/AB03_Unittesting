const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require('./formatting.js');

const array = [1, 2, 3];
const word = 'racecar';
const sentence = 'hello world, this is a sample sentence.';

const lastElement = getLastElement(array);
console.log('Letztes Element des Arrays:', lastElement);

const palindromeCheck = isPalindrome(word);
console.log(`Ist '${word}' ein Palindrom? ${palindromeCheck ? 'Ja' : 'Nein'}`);

const capitalizedSentence = capitalizeWords(sentence);
console.log('Satz mit Großbuchstaben am Anfang jedes Wortes:', capitalizedSentence);

const longestWordLength = lengthOfLongestWord(sentence);
console.log('Länge des längsten Wortes im Satz:', longestWordLength);
