import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { navigate } from 'gatsby';
import styles from './GuideTile.module.scss';

const GuideTile = ({ minutes, title, description, path, className }) => (
  <div className={cx(styles.tile, className)}>
    <div className={styles.timeEstimate}>{minutes} minutes</div>
    <div className={styles.main}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button type="button" onClick={() => navigate(path)}>
        Start the guide
      </button>
    </div>
  </div>
);

GuideTile.propTypes = {
  minutes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GuideTile;
