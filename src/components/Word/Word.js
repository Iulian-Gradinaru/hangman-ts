import React from "react";

export const Word = (props) => {
  const { wordToGuess, formatLetter } = props;

  const renderWord = () => {
    return wordToGuess.split("").map((letter, index) => {
      return (
        <span style={{ letterSpacing: "0.75em" }} key={index}>
          {formatLetter(letter, index)}
        </span>
      );
    });
  };

  return <div>{renderWord()}</div>;
};
