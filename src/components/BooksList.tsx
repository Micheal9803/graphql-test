import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOKS, DELETE_BOOK } from "../queries/gql";

const BooksList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.books.map((book: any) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
            <button
              onClick={() => {
                deleteBook({
                  variables: { id: book.id },
                });
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
