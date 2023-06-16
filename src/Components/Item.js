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
      <div className="book-item">
        <div className="book-details">
          <div className="left-side">
            <h3 className="book-category">{category}</h3>
            <h2 className="book-title">{title}</h2>
            <h5 className="book-author">{author}</h5>
            <div className="button-panel">
              <button className="button-wrapper" type="button">
                Comments
              </button>
              <div className="vertical" />
              <button
                className="button-wrapper"
                type="submit"
                onClick={handleRemoveBook(itemId)}
              >
                Remove
              </button>
              <div className="vertical" />
              <button className="button-wrapper" type="button">
                Edit
              </button>
            </div>
          </div>
          <div className="right-side">
            <div className="circle">
              <div className="progress-circle" />
            </div>
            <div className="stats">
              <p className="percentage">75%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="vertical-divider" />
            <div className="progress-wrapper">
              <div>
                <p className="top">CURRENT CHAPTER</p>
                <p className="mid">Chapter 12: The players</p>
              </div>
              <div>
                <button className="update-button" type="button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
