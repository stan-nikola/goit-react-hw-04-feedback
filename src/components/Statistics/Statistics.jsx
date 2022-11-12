import PropTypes from 'prop-types';

import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ statOptions, total, positivePercentage }) => {
  const { good, neutral, bad } = statOptions;
  return (
    <>
      {total() > 0 ? (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad} </li>
          <li>Total:{total()} </li>
          <li>Positive feedback:{positivePercentage()}%</li>
        </ul>
      ) : (
        <Notification title="No feedback given" />
      )}
    </>
  );
};

Statistics.propTypes = {
  statOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
