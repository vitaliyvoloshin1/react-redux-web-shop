import React, { Component } from "react";
// import { Provider } from "react-rudux";
// import "./store";
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import books from "./reducers/books";

class App extends Component {
  render() {
    const {books} = this.props.books;
    const {setBooks} = this.props;
    const newBooks = [{
      id: 0,
      title: 'asasasasa'
    }];
    return (
      <div>
        <h1>{books[0].title}</h1>
        <button onClick={setBooks.bind(this.newBooks)}>set new book</button>
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps =dispatch => ({
  serBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
