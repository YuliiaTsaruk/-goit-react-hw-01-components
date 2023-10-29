import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgb(192, 192, 192);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid #010101;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #111;
`;

export const TitleData = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  padding: 0;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(192, 192, 192, 0.3);
  width: 100%;
`;
