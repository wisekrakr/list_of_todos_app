import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/pages/About";
// import uuid from "uuid";

import "./App.css";
import axios from "axios";

const PATH = "https://jsonplaceholder.typicode.com/todos/";

class App extends Component {
  state = {
    todos: []
  };

  // To make an initial request to API, we use another lifecycle method (next to render)
  // This will run right after componentMount()
  componentDidMount() {
    axios.get(PATH + "?_limit=20").then(res => {
      this.setState({ todos: res.data });
    });
  }

  // Toggle complete checkbox for Todo Items
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Add todo on Todo list
  addTodo = title => {
    axios
      .post(PATH, {
        title,
        completed: false,
        when: new Date().toLocaleString()
      })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
  };

  // Remove todo from Todo list
  removeTodo = id => {
    axios.get(PATH + id).then(res => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {/* The Main Page Header */}
          <Header />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  {/* Add todo with submit button */}
                  <AddTodo addTodo={this.addTodo} />
                  {/* A List of todos */}
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    removeTodo={this.removeTodo}
                  />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

// // Return a random id
// function randomID() {
//   return uuid.v4();
// }

export default App;
