import React from 'react';
import user from '../data/user.json';
import Profile from '../components/profile/Profile';
import Statistics from '../components/statistics/Statictics';
import data from '../data/data.json';
import friends from '../data/friends.json';
import FriendList from '../components/friends/Friendlist';
import TransactionHistory from '../components/transactions/Transactions';
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
