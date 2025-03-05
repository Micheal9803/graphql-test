import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Book from "./components/Book";
import { Button } from "@mui/material";
import BasicSpeedDial from "./components/Dial";

function App() {
  return (
    <div>
      <Button variant="outlined">graphQL 테스트를 해봐요!</Button>
      <BooksList />
      <Book id={1} />
      <Book id={2} />
      <AddBook />
      <BasicSpeedDial />
    </div>
  );
}

export default App;
