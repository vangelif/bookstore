import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [newBook, setnewBook] = useState({
    id: '',
    title: '',
    author: '',
  });
  const arrayOfBooks = useSelector((state) => state.books);
  const id = arrayOfBooks.length;

  const onChange = (e) => {
    setnewBook({
      ...newBook,
      id: (id + 1).toString(),
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setnewBook({
      id: '',
      title: '',
      author: '',
    });
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={setnewBook.title}
          onChange={onChange}
          name="title"
          placeholder="Choose Book's Title.."
          required
        />
        <input
          type="text"
          value={setnewBook.author}
          onChange={onChange}
          name="author"
          placeholder="Choose Book's Author.."
          required
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Form;
