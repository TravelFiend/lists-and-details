import React from 'react';
import PropTypes from 'prop-types';
import HeyArnoldList from './HeyArnoldList';

const HeyArnold = ({ characters, onClick }) => (
  <div>
    <HeyArnoldList onClick={onClick} characters={characters} />
  </div>
);

HeyArnold.propTypes = {
  characters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeyArnold;
