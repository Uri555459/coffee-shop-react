import React from 'react';
import Decore from "../Decore/Decore";

import './info.scss'

const Info = ({images, textDescription}) => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__inner">
          <div className="info__img-wrap">
            <img src={images} alt="" className="info__img"/>
          </div>
          <div className="info__content">
            <Decore title='About our beans'/>
            {textDescription.map(item => <p key={item}>{item}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;