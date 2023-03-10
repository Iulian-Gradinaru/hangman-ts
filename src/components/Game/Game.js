import React, { useEffect, useState } from "react";
import { Title } from "../Title/Title";
import { Images } from "../Images/Images";
import { Keyboard } from "../Keyboard/Keyboard";
import { Word } from "../Word/Word";
import words from "../wordlist.json";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const Game = () => {
  const [lettersPressed, setLettersPressed] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    setWordToGuess(getWord());
  }, []);

  const formatLetter = (letter, index) => {
    if (index === 0) return letter;
    if (wordToGuess.length - 1 === index) return letter;
    return lettersPressed.includes(letter) ? letter : "_";
  };

  useEffect(() => {
    if (wordToGuess.length > 0 && lettersPressed.length > 0) {
      const isWinner = wordToGuess
        .split("")
        .every((letter) => lettersPressed.includes(letter));
      if (isWinner) {
        setIsWinner(true);
        setGameOver(true);
      }
    }
    // eslint-disable-next-line
  }, [lettersPressed, wordToGuess]);

  useEffect(() => {
    if (numberOfMistakes >= 6) {
      setGameOver(true);
    }
  }, [numberOfMistakes]);

  const handleClick = (letter) => {
    if (lettersPressed.includes(letter) || gameOver) return;
    setLettersPressed((currentState) => {
      return [...currentState, letter];
    });
    if (!wordToGuess.split("").includes(letter)) {
      setNumberOfMistakes((currentState) => (currentState += 1));
    }
  };

  const handleResetGame = () => {
    setLettersPressed([]);
    setWordToGuess(getWord());
    setGameOver(false);
    setNumberOfMistakes(0);
    setIsWinner(false);
  };

  return (
    <>
      <Title />
      {gameOver && !isWinner && <h1>gameOver</h1>}
      {isWinner && <h1>YOU WON</h1>}
      <Images numberOfMistakes={numberOfMistakes} />
      <Word
        wordToGuess={wordToGuess}
        lettersPressed={lettersPressed}
        formatLetter={formatLetter}
      />
      {!gameOver && <Keyboard onClick={handleClick} />}
      <hr />
      <button onClick={handleResetGame}>Reset</button>
    </>
  );
};
