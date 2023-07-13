// Файл: FriendListItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${statusClassName}`}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
