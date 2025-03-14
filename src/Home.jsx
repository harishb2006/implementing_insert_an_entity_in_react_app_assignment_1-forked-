// src/components/Home.jsx

import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handle = () => {
     navigate("/form")
  }
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button className="h-[40px] w-[150px]" onClick={handle} >Add</button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
