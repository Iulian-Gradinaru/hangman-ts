import React from 'react';

/**
 * Imports images
 */
import gallow from './assets/gallow.jpg';
import head from './assets/head.jpg';
import body from './assets/body.jpg';
import leftHand from './assets/leftHand.jpg';
import rightHand from './assets/rightHand.jpg';
import leftLeg from './assets/leftLeg.jpg';
import rightLeg from './assets/rightLeg.jpg';

/**
 * Imports styled
 */
import { DrawingContainer, ContainerImg } from './Drawing.styled';

/**
 * Imports types
 */
import { DrawingProps } from './Drawing.types';

const Image = [gallow, head, body, leftHand, rightHand, leftLeg, rightLeg];

/**
 * Displays the component
 */
export const Drawing: React.FC<DrawingProps> = (props) => {
  const { numberOfMistakes } = props;
  return (
    <ContainerImg className="container-img">
      <DrawingContainer
        className="img"
        src={Image[numberOfMistakes]}
        alt="img"
      />
    </ContainerImg>
  );
};
