import css from './Transactions.module.css';
import PropTypes from 'prop-types';

const TransactionsHistoryComponent = ({ items, color }) => {
  const { id, type, amount, currency } = items;
  return (
    <>
      <tr key={id} className={css.table} style={{ background: color }}>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </>
  );
};

export default TransactionsHistoryComponent;

TransactionsHistoryComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
  color: PropTypes.string.isRequired,
};
