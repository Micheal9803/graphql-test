import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/gql";

const BooksList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.books.map((book: any) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
