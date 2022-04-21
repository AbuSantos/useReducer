/** @format */

import { useRef, useState, useEffect, useReducer } from "react";
import "./App.css";
import Form from "./Form";
import Modal from "./Modal";
import NewForm from "./NewForm";

//reducer function, that dispatches when the state is called
import { reducer } from "./reducer";

//setting the default state for the reducer function
const defaultState = {
  data: [],
  localStore: [],
  isModalOpen: false,
  modalContent: "",
};
console.log(defaultState.data);

const App = () => {
  //dynamically getting all the input values with a single function
  const [books, setBooks] = useState({ bookName: "", author: "", year: "" });
  const [state, dispatch] = useReducer(reducer, defaultState);

  const refDiv = useRef(null);
  const refContainer = useRef(null);

  const handleChange = (e) => {
    //handling the input values, by targeting the name, and value
    const name = e.target.name;
    const value = e.target.value;
    setBooks({ ...books, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //checking if the input values are empty b
    if (books.author && books.bookName && books.year) {
      //creating a new book from the input data
      const newBook = { ...books, id: new Date().getTime().toString() };

      //dispatch function that triggers the reducers action when it matches, the payload adds the new book
      dispatch({ type: "ADD_BOOKS", payload: newBook });

      //emptying the input fields
      setBooks({ bookName: "", author: "", year: "" });
    } else {
      //when the input fields is empty
      dispatch({ type: "NO_BOOK" });
    }
  };
  //closing the modal
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const clearBook = () => {
    dispatch({ type: "CLEAR_BOOK" });
  };

  // useEffect(()=>{
  //   refDiv.current.focus()
  // })

  return (
    <>
      {/* passing the modal content and  close modal function inside the modal component */}
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            value={books.author}
            type="text"
            ref={refDiv}
            style={{ marginLeft: "10px" }}
            onChange={handleChange}
          />

          <input
            name="bookName"
            value={books.bookName}
            type="text"
            onChange={handleChange}
            style={{ margin: "10px" }}
          />

          <label htmlFor="bookName"> Book Name</label>
          <input
            name="year"
            value={books.year}
            type="number"
            onChange={handleChange}
          />
          <label htmlFor="year"> Year </label>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <div className="collection">
        <h2>Books List</h2>
        {/* mapping the data from the reducer state  */}
        {state.data.map((book) => {
          console.log(book);
          const { bookName, author, year, id } = book;
          return (
            <div className="item" key={id} ref={refContainer}>
              <p> {bookName} </p>
              <p> {author} </p>
              <h4> {year} </h4>

              {/* deleting a book by its book id */}
              <button
                onClick={() => dispatch({ type: "DELETE_BOOK", payload: id })}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      {/* <Form /> */}
      <NewForm />
    </>
  );
};

export default App;
