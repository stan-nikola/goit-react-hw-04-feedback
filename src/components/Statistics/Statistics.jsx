import PropTypes from 'prop-types';

import { Notification } from 'components/Notification/Notification';
import { Box } from 'components/Box/Box';
import { StatItems } from './Statistics.styled';

export const Statistics = ({ statOptions, total, positivePercentage }) => {
  const { good, neutral, bad } = statOptions;
  return (
    <>
      {total() > 0 ? (
        <Box
          as="ul"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gridGap={2}
        >
          <li>
            <StatItems>Good:</StatItems>
            {good}
          </li>
          <li>
            <StatItems>Neutral:</StatItems>
            {neutral}
          </li>
          <li>
            <StatItems>Bad:</StatItems>
            {bad}{' '}
          </li>
          <li>
            <StatItems>Total:</StatItems>
            {total()}{' '}
          </li>
          <li>
            <StatItems>Positive feedback:</StatItems>
            {positivePercentage()}%
          </li>
        </Box>
      ) : (
        <Notification title="There is no feedback" />
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
