import {
  Wrapper,
  PersonalData,
  List,
  ListItem,
  Name,
  TitleData,
  Avatar,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <PersonalData>
        <Avatar src={avatar} alt={username} width="120" height="120" />
        <Name>{username}</Name>
        <TitleData>@{tag}</TitleData>
        <TitleData>{location}</TitleData>
      </PersonalData>

      <List>
        <ListItem>
          <span>Followers</span>
          <span>{followers}</span>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <span>{views}</span>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <span>{likes}</span>
        </ListItem>
      </List>
    </Wrapper>
  );
};
