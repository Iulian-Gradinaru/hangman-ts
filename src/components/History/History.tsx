import React from 'react';

/**
 * Imports styled
 */
import { Container, Title, Display } from './History.styled';

/**
 * Imports types
 */
import { HistoryProps } from './History.types';
import { HistoryItem } from '../Game/Game.types';

/**
 * Displays the component
 */
export const History: React.FC<HistoryProps> = (props) => {
  const { history } = props;

  return (
    <Container className="history">
      <Title className="title-history">History:</Title>
      <Display className="display">
        {history.map((historyItem: HistoryItem, index: number) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <div> Word: {historyItem.wordToGuess}</div>
            <div className="mistakes">
              {' '}
              Mistakes: {historyItem.numberOfMistakes}
            </div>
            <div> Winner: {historyItem.isWinner ? 'yes' : 'no'}</div>
          </div>
        ))}
      </Display>
    </Container>
  );
};
