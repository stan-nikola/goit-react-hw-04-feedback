import PropTypes from 'prop-types';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import { Box } from 'components/Box/Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options,
  type = 'button',

  onLeaveFeedback,
}) => (
  <Box display="flex" alignItems="center" justifyContent="space-evenly" my={4}>
    {Object.keys(options).map(btnLabel => (
      <Button
        key={btnLabel}
        type={type}
        onClick={() => onLeaveFeedback(btnLabel)}
      >
        {(btnLabel === 'good' && <BsFillEmojiSmileFill fill="#07ff62" />) ||
          (btnLabel === 'neutral' && (
            <BsFillEmojiNeutralFill fill="#ffff07" />
          )) ||
          (btnLabel === 'bad' && <BsFillEmojiFrownFill fill="#ff0000" />)}
      </Button>
    ))}
  </Box>
);
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
