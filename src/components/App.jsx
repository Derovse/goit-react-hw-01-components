import React from 'react';
import user from 'data/user';
import Profile from './profile/Profile';
import data from 'data/data';
import Statistics from '../components/statistics/Statictics';
import friends from 'data/friends';
import FriendList from '../components/friends/Friendlist';
import transactions from 'data/transactions';
import TransactionHistory from '../components/transactions/Transactions';

const App = () => {
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

export default App;
