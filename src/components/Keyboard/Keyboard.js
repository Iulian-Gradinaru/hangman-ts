import React from "react";
import "./Keyboard.css";

export const Keyboard = (props) => {
  const { onClick } = props;

  return "abcdefghijklmnopqrstuvwxyz".split("").map((letter, index) => (
    <button onClick={() => onClick(letter)} className="keyboard" key={index}>
      {letter}
    </button>
  ));
};
