import React from 'react';
import user from '../components/data/user';
import Profile from './profile/profile';
import Statistics from '../components/statistics/statictics'; // Укажите правильный путь к компоненту Statistics
import data from '../components/data/data';
import friends from '../components/data/friends.json';
import FriendList from '../components/friends/friendlist'; // Укажите правильный путь к компоненту FriendList
import TransactionHistory from '../components/transactions/transactions'; // Укажите правильный путь к компоненту TransactionHistory
import transactions from '../components/data/transactions.json'; // Укажите правильный путь к файлу transactions.json

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
