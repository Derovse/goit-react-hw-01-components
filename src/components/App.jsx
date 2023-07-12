import React from 'react';
import user from '../data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statictics';
import data from '../data/data.json';
import friends from '../data/friends.json';
import FriendList from './Friends/Friendlist';
import TransactionHistory from './Transactions/Transactions';
import transactions from '../data/transactions.json';

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
