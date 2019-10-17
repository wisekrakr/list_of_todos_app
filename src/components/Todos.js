import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    //   this.props = Todos. The todos are the Todos todos in App.js where we render Todos
    //   which in turn will return the state ===> which has all the todos
    //   For each todo that we map through, we return the todo item
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        removeTodo={this.props.removeTodo}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default Todos;
