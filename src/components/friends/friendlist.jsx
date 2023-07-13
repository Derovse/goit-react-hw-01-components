// Файл: FriendList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';
import FriendListItem from '../friends/friendsitem/friendsitem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles['friend-list']}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
