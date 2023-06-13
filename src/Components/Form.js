import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [newState, setnewState] = useState({
    id: '',
    title: '',
    author: '',
  });
  const arrayOfBooks = useSelector((state) => state.books);
  const id = arrayOfBooks.length;
  const onChange = (e) => {
    setnewState({
      ...newState,
      id: (id + 1).toString(),
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newState));
    setnewState({
      id: '',
      title: '',
      author: '',
    });
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form>
        <input
          type="text"
          value={newState.title}
          onChange={onChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={newState.author}
          onChange={onChange}
          placeholder="Author"
          required
        />
        <button onSubmit={handleSubmit} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};
export default Form;
