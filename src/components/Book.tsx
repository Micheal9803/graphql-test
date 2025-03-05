import React from "react";
import { GET_BOOK } from "../queries/gql";
import { useQuery } from "@apollo/client";

type BookId = {
  id: string;
};

const Book = ({ id }: BookId) => {
  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>certain Book {id}</h2>
      <p>
        {data.book.title} by {data.book.author} ({data.book.year})
      </p>
    </div>
  );
};

export default Book;
