import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Item = (props) => {
  const { Author, Title, id } = props;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <h2>{Title}</h2>
      <h3>{Author}</h3>
      <button type="submit" onClick={handleDelete}>
        Remove
      </button>
    </li>
  );
};

Item.propTypes = {
  Author: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Item;
