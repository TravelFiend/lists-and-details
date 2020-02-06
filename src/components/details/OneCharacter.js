import React, { useState, useEffect } from 'react';
import { CharacterDetail } from '../../services/getApiData';
import Header from '../header/Header';
import PropTypes from 'prop-types';
import styles from './OneCharacter.css';

const OneCharacter = ({ match }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    CharacterDetail(match.params.id)
      .then(character => setCharacter(character));
  }, [match.params.id]);

  return (
    <div className={styles.Container}>
      <Header />
      <section>
        <h2>{character.name}</h2>
        <img src={character.image} />
      </section>
    </div>
  );
};

OneCharacter.propTypes = {
  match: PropTypes.object
};

export default OneCharacter;
