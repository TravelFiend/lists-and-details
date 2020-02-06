import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ pageNum, handleBackClick, handleForwardClick }) => (
  <div className={styles.Paging}>
    <button onClick={handleBackClick}>&lt;</button>
    <p>Page: {pageNum}</p>
    <button onClick={handleForwardClick}>&gt;</button>
  </div>
);

Paging.propTypes = {
  pageNum: PropTypes.number.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  handleForwardClick: PropTypes.func.isRequired
};

export default Paging;
