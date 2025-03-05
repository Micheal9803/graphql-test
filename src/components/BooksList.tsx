import React from "react";
import {
  useQuery,
  useMutation,
  NetworkStatus,
  useSuspenseQuery,
} from "@apollo/client";
import { GET_BOOKS, DELETE_BOOK } from "../queries/gql";

const BooksList = () => {
  const { error, data, refetch, networkStatus } = useSuspenseQuery(GET_BOOKS);

  const [deleteBook] = useMutation(DELETE_BOOK, {});

  if (networkStatus === NetworkStatus.refetch) return <p>refetching...</p>;

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
      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
};

export default BooksList;
