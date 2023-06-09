import React from 'react';

const Form = () => (
  <section>
    <h2>Add Book</h2>
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add</button>
    </form>
  </section>
);

export default Form;
