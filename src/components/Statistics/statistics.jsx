import css from './statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
          {stats &&
            stats.map(({ id, label, percentage }) => {
              return (
                <li
                  key={id}
                  className={css.item}
                  style={{ background: getRandomHexColor() }}
                >
                  <span className={css.label}>{label}</span>
                  <span className={css.percentage}>{percentage}%</span>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
