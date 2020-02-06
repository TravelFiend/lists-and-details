import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeyArnoldList.css';
import HeyArnoldItem from './HeyArnoldItem';

const HeyArnoldList = ({ characters, onClick }) => {
  const heyElements = characters.map(({ name, image }) => {
    const underscoreName = name.replace(/\s/g, '_');

    return (
      <li key={name} name={name}>
        <HeyArnoldItem id={underscoreName} name={name} image={image}  onClick={onClick}/>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.Ul}>
        {heyElements}
      </ul>
    </>
  );
};

HeyArnoldList.propTypes = {
  onClick: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired
};

export default HeyArnoldList;
