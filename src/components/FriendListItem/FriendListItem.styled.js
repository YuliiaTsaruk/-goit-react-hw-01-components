import styled from 'styled-components';

const getStatusColor = p => {
  if (p.$isOnline === true) {
    return 'green';
  }
  return 'red';
};

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: ${getStatusColor};
`;
