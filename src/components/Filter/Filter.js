import React from 'react'

// import data from '../../db.json'

import './filter.scss'


const Filter = ({ filterBtnHandler, enterHandler, searchValue, searchHandler }) => {


  return (
    <div className="filter">
      <div className='container'>
        <div className="filter__inner" onClick={(event) => filterBtnHandler(event)}>
          <div className="filter__left">
            <div className="filter__title">Lookiing for</div>
            <form className="form-search" onSubmit={(event) => enterHandler(event)}>
              <input className='form-search__input' onChange={event => searchHandler(event)} type="search" placeholder='start typing here...' value={searchValue} />
            </form>
          </div>
          <div className="filter__right">
            <div className="filter__title">Or filter</div>
            <button className="filter__btn" data-country='brazil'>Brazil</button>
            <button className="filter__btn" data-country='kenya'>Kenya</button>
            <button className="filter__btn" data-country='columbia'>Columbia</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;