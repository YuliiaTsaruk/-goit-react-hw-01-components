import { Wrapper, Title, List, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
