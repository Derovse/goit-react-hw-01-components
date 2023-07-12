import React from 'react';
import user from '../components/data/user';
import Profile from './profile/Profile';
import Statistics from './statistics/Statictics';
import data from '../components/data/data';
import friends from '../components/data/friends.json';
import FriendList from './friends/Friendlist';
import TransactionHistory from './transactions/Transactions';
import transactions from '../components/data/transactions.json';

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
