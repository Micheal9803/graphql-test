import { useMutation } from "@apollo/client";
import { ADD_BOOK, GET_BOOKS } from "../queries/gql";
import React from "react";

const AddBook = () => {
  let title, author, year;
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  return (
    <div id="add-book">
      <h2>Add Book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook({
            variables: {
              title: title.value,
              author: author.value,
              year: parseInt(year.value),
            },
          });
          title.value = "";
          author.value = "";
          year.value = "";
        }}
      >
        <label>
          Title:
          <input
            ref={(node) => {
              title = node;
            }}
            type="text"
            name="title"
          />
        </label>
        <label>
          Author:
          <input
            ref={(node) => {
              author = node;
            }}
            type="text"
            name="author"
          />
        </label>
        <label>
          Year:
          <input
            ref={(node) => {
              year = node;
            }}
            type="number"
            name="year"
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
