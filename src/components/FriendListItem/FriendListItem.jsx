export const FriendListItem = ({ userName, imgUrl, isOnline }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={imgUrl} alt="User avatar" width="48" />
      <p>{userName}</p>
    </li>
  );
};
