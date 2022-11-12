import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(btnLabel => (
    <button
      key={btnLabel}
      type="button"
      onClick={() => onLeaveFeedback(btnLabel)}
    >
      {btnLabel}
    </button>
  ));
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
