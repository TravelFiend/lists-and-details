import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import getApiData from '../../services/getApiData';
import HeyArnoldList from './HeyArnoldList';
import Paging from '../paging/Paging';

const HeyArnold = () => {
  const [characters, setCharacters] = useState([]);
  const [, setOneChar] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const fetch = () => {
    getApiData(pageNum)
      .then(characters => setCharacters(characters));
  };

  useEffect(() => {
    fetch(pageNum);
  }, [pageNum]);


  const handleClick = ({ target }) => {
    setOneChar(target.value);
  };

  const handleBackClick = () => {
    if(pageNum === 1){
      return;
    }
    setPageNum(pageNum - 1);
  };

  const handleForwardClick = () => {
    if(pageNum === 11){
      return;
    }
    setPageNum(pageNum + 1);
  };

  return (
    <main>
      <Header />
      <Paging pageNum={pageNum} handleBackClick={handleBackClick} handleForwardClick={handleForwardClick} />
      <HeyArnoldList onClick={handleClick} characters={characters} />
    </main>
  );
};

HeyArnold.propTypes = {
  match: PropTypes.object
};

export default HeyArnold;
