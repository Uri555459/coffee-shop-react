import React from 'react';

import './spiner.scss'

import spiner from '../../assets/images/spinner.gif'

const Spiner = () => {
  return (
    <img className='spiner' src={spiner} alt=""/>
  );
};

export default Spiner;