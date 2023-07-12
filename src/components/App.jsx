import user from 'data/user';
import { Profile } from './profile/profile';
import data from 'data/data';
import { Statistics } from './statistics/statisticsList';
import friends from 'data/friends';
import { FriendList } from './friends/friendList/friendList';
import transactions from 'data/transactions';
import { TransactionHistory } from './transactions/Transactions';

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
