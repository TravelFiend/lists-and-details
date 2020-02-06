import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ pageNum, onBackClick, onForwardClick }) => (
  <div className={styles.Paging}>
    <button onClick={onBackClick}>&lt;</button>
    <p>Page: {pageNum}</p>
    <button onClick={onForwardClick}>&gt;</button>
  </div>
);

Paging.propTypes = {
  pageNum: PropTypes.number.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onForwardClick: PropTypes.func.isRequired
};

export default Paging;
