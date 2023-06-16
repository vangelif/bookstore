import { useSelector } from 'react-redux';
import Item from './Item';
import Form from './Form';

const List = () => {
  const books = useSelector((store) => store.books.bookItems);

  return (
    <>
      <section className="list-container">
        <ul className="book-list">
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
        <Form />
      </section>
    </>
  );
};
export default List;
