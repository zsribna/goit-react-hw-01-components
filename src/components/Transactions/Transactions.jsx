import css from './Transactions.module.css';
import { nanoid } from 'nanoid';
import TransactionsHistoryComponent from './TransactionsHistoryComponent';

const Transactions = ({ items }) => {
  const color = '#e8e8e8';
  return (
    <>
      <table className={css.transaction_history}>
        <thead className={css.line}>
          <tr className={css.lines}>
            <th className={css.th}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map(item => {
              return (
                <TransactionsHistoryComponent
                  key={nanoid()}
                  items={item}
                  color={color}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Transactions;
