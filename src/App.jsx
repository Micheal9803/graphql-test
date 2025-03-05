import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Book from "./components/Book";
import { Button } from "@mui/material";
import BasicSpeedDial from "./components/Dial";
import { Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<div>something went wrong...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Button variant="outlined">graphQL 테스트를 해봐요!</Button>
          <BooksList />
          <Book id={1} />
          <Book id={2} />
          <AddBook />
          <BasicSpeedDial />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
