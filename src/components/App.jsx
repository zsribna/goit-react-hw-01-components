import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile users={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
