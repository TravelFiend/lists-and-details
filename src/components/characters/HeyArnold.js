import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import getApiData from '../../services/getApiData';
import HeyArnoldList from './HeyArnoldList';
import Paging from '../paging/Paging';

const HeyArnold = ({ match }) => {
  const [characters, setCharacters] = useState([]);
  const [oneChar, setOneChar] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const fetch = () => {
    getApiData()
      .then(characters => setCharacters(characters));
  };

  useEffect(() => {
    fetch();
  }, []);


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

export default HeyArnold;
