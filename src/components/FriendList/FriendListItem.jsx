import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  const { id, isOnline, avatar, name } = friends;
  return (
    <>
      <li key={id} className={css.item}>
        {isOnline === true ? (
          <span className={css.status}>{isOnline}</span>
        ) : (
          <span className={css.status_red}>{isOnline}</span>
        )}

        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

export default FriendListItem;
FriendListItem.ropTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
