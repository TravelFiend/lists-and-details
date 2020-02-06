import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeyArnoldItem = ({ id, name, image, onClick }) => (
  <>
    <h2>{name}</h2>
    <img src={image} />
    <Link to={`/${id}`}>
      <button onClick={onClick}>Choose this Fool!</button>
    </Link>
  </>
);

HeyArnoldItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeyArnoldItem;
