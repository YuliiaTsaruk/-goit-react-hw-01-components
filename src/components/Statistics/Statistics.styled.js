import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 400px;
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: #010101;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgba(${red}, ${green}, ${blue}, ${0.2})`;
}
