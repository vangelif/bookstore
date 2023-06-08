import React from 'react';
import Item from './Item';

const List = () => {
  const books = [
    {
      id: 1,
      Author: 'Bulgagov',
      Title: 'Master & Margarita',
    },
  ];
  return (
    <>
      <div>
        <ul>
          {books.map((book) => (
            <Item key={book.id} Author={book.Author} Title={book.Title} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default List;
