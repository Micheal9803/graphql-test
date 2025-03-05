const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");

const books = [
  { id: "1", title: "해리포터", author: "J.K. 롤링", year: 1997 },
  { id: "2", title: "반지의 제왕", author: "톨킨", year: 1954 },
  { id: "3", title: "눈의 여왕", author: "안데르센", year: 1844 },
];

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int!
}

 type Query {
  books: [Book]
  book(id: ID!): Book
 }

  type Mutation {
    addBook(title: String!, author: String!, year: Int!): Book
    deleteBook(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
  },
  Mutation: {
    addBook: (_, { title, author, year }) => {
      const newBook = {
        id: String(books.length + 1),
        title,
        author,
        year,
      };
      books.push(newBook);
      return newBook;
    },
    deleteBook: (_, { id }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) {
        throw new Error("Book not found");
      }
      const [deletedBook] = books.splice(bookIndex, 1);
      return deletedBook;
    },
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

startServer();
