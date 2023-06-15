import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

// eslint-disable-next-line object-curly-newline
const Item = ({ title, author, category, itemId }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => () => {
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{category}</p>
      <button type="submit" onClick={handleRemoveBook(itemId)}>
        Remove
      </button>
    </li>
  );
};

Item.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Item;
