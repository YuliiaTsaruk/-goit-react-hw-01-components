import { Table, Header, HeaderItem, Item } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Header>
        <tr>
          <HeaderItem>Type</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Currency</HeaderItem>
        </tr>
      </Header>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Item>{item.type}</Item>
              <Item>{item.amount}</Item>
              <Item>{item.currency}</Item>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
