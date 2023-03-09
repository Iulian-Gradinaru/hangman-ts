import React, { useState } from 'react';
import { Title } from '../Title/Title';
import { Images } from '../Images/Images';
import { Keyboard } from '../Keyboard/Keyboard';
import { Word } from '../Word/Word';
import words from '../wordlist.json';

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const Game = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  return (
    <>
      <Title />
      <Images />
      <Word
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <Keyboard />
    </>
  );
};
