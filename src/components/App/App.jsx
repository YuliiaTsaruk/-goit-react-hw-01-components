import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../helpner/user.json';
import data from '../helpner/data.json';
import friends from '../helpner/friends.json';
import transactions from '../helpner/transactions.json';
import { GlobalStyle } from '../GlobalStyled';
import { WrapperApp } from './App.styled';

export const App = () => {
  return (
    <WrapperApp>
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
      <GlobalStyle />
    </WrapperApp>
  );
};
