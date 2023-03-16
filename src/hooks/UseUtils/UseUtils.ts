/**
 * Imports array HanmanWords
 */
import { HANGMAN_WORDS } from '../../constants';

/**
 * Gets general utils
 */
export const UseUtils = () => {
  /**
   * Return a random word from a list
   */
  const getWord = () => {
    return HANGMAN_WORDS[Math.floor(Math.random() * HANGMAN_WORDS.length)];
  };

  return { getWord };
};
