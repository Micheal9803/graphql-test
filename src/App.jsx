import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Book from "./components/Book";

function App() {
  return (
    <div>
      <h1>graphQL 테스트를 해봐요!</h1>
      <BooksList />
      <Book id={1} />
      <Book id={2} />
      <AddBook />
    </div>
  );
}

export default App;
