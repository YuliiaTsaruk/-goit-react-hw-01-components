import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          imgUrl={avatar}
          userName={name}
        />
      ))}
    </List>
  );
};
