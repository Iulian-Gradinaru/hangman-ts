import React from 'react';
import img0 from '../Images/0.jpg';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpg';

const Image = [img0, img1, img2, img3, img4, img5, img6];

export const Images = () => {
  return (
    <div>
      <img src={img0} alt={'img'} />
    </div>
  );
};