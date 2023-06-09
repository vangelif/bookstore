import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchedBooks } from '../redux/books/booksSlice';

const Form = () => {
  const [newBook, setnewBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Fiction',
  });

  const [count, setCount] = useState(0);
  const add = count + 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const onChange = (e) => {
    setnewBook({
      ...newBook,
      item_id: `${Math.trunc(Math.random() * 10000)}`,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="divider" />
      <section>
        <h2>Add New Book</h2>
        <form>
          <input
            type="text"
            value={setnewBook.title}
            onChange={onChange}
            name="title"
            placeholder="Choose Book Title..."
            required
          />
          <input
            type="text"
            value={setnewBook.author}
            onChange={onChange}
            name="author"
            placeholder="Choose Book Author..."
            required
          />
          <button
            className="form-button"
            type="button"
            onClick={async () => {
              await dispatch(addBook(newBook));
              setCount(add);
            }}
          >
            ADD BOOK
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
