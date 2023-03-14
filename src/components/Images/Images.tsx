import React from 'react';
import img0 from './ImagesContainer/0.jpg';
import img1 from './ImagesContainer/1.jpg';
import img2 from './ImagesContainer/2.jpg';
import img3 from './ImagesContainer/3.jpg';
import img4 from './ImagesContainer/4.jpg';
import img5 from './ImagesContainer/5.jpg';
import img6 from './ImagesContainer/6.jpg';

import { ImagesProps } from './Images.types';
import { ImgContainer } from './ImagesContainer/Images.styled';

const Image = [img0, img1, img2, img3, img4, img5, img6];

export const Images: React.FC<ImagesProps> = (props) => {
  const { numberOfMistakes } = props;
  return (
    <div>
      <ImgContainer className="img" src={Image[numberOfMistakes]} alt={'img'} />
    </div>
  );
};