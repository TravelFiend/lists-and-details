import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeyArnoldList.css';
import HeyArnoldItem from './HeyArnoldItem';

const HeyArnoldList = ({ characters, onClick }) => {
  const heyElements = characters.map(({ name, image, _id }) => (
    <li key={name} name={name}>
      <HeyArnoldItem id={_id} name={name} image={image}  onClick={onClick}/>
    </li>
  ));

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
