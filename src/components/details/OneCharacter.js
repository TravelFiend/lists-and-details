import React, { useState, useEffect } from 'react';
import { CharacterDetail } from '../../services/getApiData';
import PropTypes from 'prop-types';
import styles from './OneCharacter.css';

const OneCharacter = ({ match }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    CharacterDetail(match.params.id)
      .then(character => setCharacter(character));
  }, [match.params.id]);

  return (
    <section className={styles.Sect} >
      <h2>{character.name}</h2>
      <img src={character.image} />
    </section>
  );
};

OneCharacter.propTypes = {
  match: PropTypes.object
};

export default OneCharacter;
