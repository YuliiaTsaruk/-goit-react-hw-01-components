import styled from 'styled-components';
export const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Header = styled.thead`
  background-color: #87ceeb;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`;

export const HeaderItem = styled.th`
  padding: 16px;
`;

export const Item = styled.td`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: start;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
