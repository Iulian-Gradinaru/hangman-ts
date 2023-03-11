import React, { useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import { Images } from '../Images/Images';
import { Keyboard } from '../Keyboard/Keyboard';
import { Word } from '../Word/Word';
import words from '../wordlist.json';

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const Game = () => {
  const [lettersPressed, setLettersPressed] = useState([]);
  const [wordToGuess, setWordToGuess] = useState('');

  const formatLetter = (letter) => {
    return lettersPressed.includes(letter) ? letter : '_';
  };

  useEffect(() => {
    setWordToGuess(getWord());
  }, []);

  return (
    <>
      <Title />
      <Images numberOfMistakes={0} />
      <Word
        wordToGuess={wordToGuess}
        lettersPressed={lettersPressed}
        formatLetter={formatLetter}
      />
      <Keyboard
        setLettersPressed={setLettersPressed}
        lettersPressed={lettersPressed}
      />
    </>
  );
};
