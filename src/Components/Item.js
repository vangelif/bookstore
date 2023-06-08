import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { Author, Title } = props;
  return (
    <li>
      <h2>{Title}</h2>
      <h3>{Author}</h3>
      <button type="submit">Remove</button>
    </li>
  );
};

Item.propTypes = {
  Author: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
};
export default Item;
