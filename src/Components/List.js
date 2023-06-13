import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const List = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <section>
        <ul>
          {books.map((book) => (
            <Item
              key={book.id}
              id={book.id}
              Author={book.Author}
              Title={book.Title}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
export default List;
