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
              key={book.item_id}
              itemId={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
export default List;
