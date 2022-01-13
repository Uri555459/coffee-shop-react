import React from 'react';

import './decore.scss'

import decoreImgDefault from '../../assets/images/decore-black.svg'

const Decore = ({decoreImg = decoreImgDefault, title = ''}) => {
  return (
    <div className="decore-wrap">
      <h2 className="title">{title}</h2>
      <div className="decore">
        <img src={decoreImg} alt="decore"/>
      </div>
    </div>
  );
};

export default Decore;