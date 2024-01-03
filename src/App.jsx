import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [listBook, setListBook] = useState([]);
  const handleSearch = async (event) => {
    let searchText = event.target.value;
    const getListBook = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + searchText
    );

    setListBook(getListBook.data.items);
  };

  useEffect(() => {}, [listBook]);

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input type="string" onChange={handleSearch}></input>
      <ul>
        {listBook.map((items) => {
          return <li key={items.id}>{items.volumeInfo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
