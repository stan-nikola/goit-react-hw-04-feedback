import PropTypes from 'prop-types';

export const Notification = ({ title }) => {
  return <p>{title}</p>;
};

Notification.propTypes = {
  title: PropTypes.string,
};
