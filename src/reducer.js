/** @format */

export const reducer = (state, action) => {
  const saveToLocalStorage = (items) => {
    // we persist the newBook array local storage, through the json stringify
    localStorage.setItem("books", JSON.stringify(items));
  };

  const addingBooks = (item) => {
    // item = action.payload;
    let store;
    const newBooks = [...state.data, action.payload];
    saveToLocalStorage(newBooks);
    store = JSON.parse(localStorage.getItem("books"));

    return store;
  };

  if (action.type === "ADD_BOOKS") {
    console.log(addingBooks());
    return {
      //the action state, this is triggered when the dispatch type matches
      ...state,
      data: addingBooks(action.payload),
      // localStore: store,
      isModalOpen: true,
      modalContent: "Book Added",
    };
  }

  if (action.type === "NO_BOOK") {
    return {
      //the action state, this is triggered when the dispatch type matches
      ...state,
      isModalOpen: true,
      modalContent: "Input cannot be Empty",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      //the action state, this is triggered when the dispatch type matches
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "CLEAR_BOOK") {
    let newData = state.data.filter((book) => book.id !== book.id);

    return {
      ...state,
      data: newData,
      isModalOpen: true,
      modalContent: "Books Cleared",
    };
  }

  if (action.type === "DELETE_BOOK") {
    let newData = state.data.filter((book) => book.id !== action.payload);
    //  const newData = refContainer.current.remove()
    return {
      ...state,
      data: newData,
      isModalOpen: true,
      modalContent: "Book deleted",
    };
  }

  return state;
};
