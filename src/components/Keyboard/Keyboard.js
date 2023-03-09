import React from 'react';
import './Keyboard.css';

// const leters = ['abcdefghijklmnopqrstuvwxyz'];

export const Keyboard = () => {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr) => (
    <button
      className="keyboard"
      key={ltr}
      value={ltr}
      // onClick={handleGuess}
      // disabled={guessed.has(ltr)}
    >
      {ltr}
    </button>
  ));
};
