import { FriendItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ userName, imgUrl, isOnline }) => {
  return (
    <FriendItem>
      <Status $isOnline={isOnline}>{isOnline}</Status>
      <img src={imgUrl} alt="User avatar" width="48" />
      <p>{userName}</p>
    </FriendItem>
  );
};
