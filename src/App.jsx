import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div>
      <h1>graphQL 테스트를 해봐요!</h1>
      <BooksList />
      <AddBook />
    </div>
  );
}

export default App;
