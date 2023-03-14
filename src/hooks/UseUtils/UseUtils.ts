/**
 * Imports array HanmanWords
 */
import { HangmanWords } from '../../constants';

/**
 * Gets general utils
 */
export const UseUtils = () => {
  /**
   * Return a random word from a list
   */
  const getWord = () => {
    return HangmanWords[Math.floor(Math.random() * HangmanWords.length)];
  };

  return { getWord };
};
