import React from 'react';
import './BookList.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../../redux/books/actionCreators';

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>

              <div>
                <button onClick={() => handleDeleteBook(book.id)} className="book-actions">
                  Delete Book
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
