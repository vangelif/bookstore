// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  isLoading: true,
  error: undefined,
};
// eslint-disable-next-line operator-linebreak
const api =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rxnHvr828bJRlyidyHdF/books';

export const fetchedBooks = createAsyncThunk('books/fetchedBooks', async () => {
  try {
    const response = await axios.get(api);
    const results = response.data;
    return results;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(api, {
        item_id: `${book.item_id}`,
        title: `${book.title}`,
        author: `${book.author}`,
        category: `${book.category}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const response = await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rxnHvr828bJRlyidyHdF/books/${id}`,
    );
    return { response, id };
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchedBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const keys = Object.keys(action.payload);
        const bookData = [];
        keys.forEach((el) => {
          const bookItem = {
            item_id: el,
            title: action.payload[el][0].title,
            author: action.payload[el][0].author,
            category: 'action',
          };
          bookData.push(bookItem);
        });
        state.bookItems = bookData;
      })
      .addCase(fetchedBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.bookItems.forEach((el) => {
          if (el.item_id === action.payload.id) {
            state.bookItems.splice(state.bookItems.indexOf(el), 1);
          }
        });
      });
  },
});

export default booksSlice.reducer;
