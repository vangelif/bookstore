import React from 'react';
import Item from './Item';

const List = () => {
  const books = [
    {
      id: 1,
      Author: 'Bulgagov',
      Title: 'Master & Margarita',
    },
    {
      id: 2,
      Author: 'Herbert',
      Title: 'Dune',
    },
    {
      id: 3,
      Author: 'Bulgagov',
      Title: 'Master & Margarita',
    },
  ];
  return (
    <>
      <section>
        <ul>
          {books.map((book) => (
            <Item key={book.id} Author={book.Author} Title={book.Title} />
          ))}
        </ul>
      </section>
    </>
  );
};
export default List;
