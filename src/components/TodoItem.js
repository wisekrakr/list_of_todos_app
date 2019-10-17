import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      fontWeight: this.props.todo.completed ? null : "700",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: this.props.todo.completed ? "#e3e3e3" : "#5CBDBB",
      padding: "1rem",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    const { id, title, when } = this.props.todo;
    return (
      //   <div className="inline-field" style={this.getStyle()}>
      //     <input
      //       type="checkbox"
      //       onChange={this.props.toggleComplete.bind(this, id)}
      //     />
      //     <p>{title}</p>
      //     <button style={btnStyle}>x</button>
      //   </div>

      <div className="box-body">
        <ul className="todo-list ui-sortable">
          <li style={this.getStyle()}>
            <span className="handle ui-sortable-handle">
              <i className="fa fa-ellipsis-v"></i>
              <i className="fa fa-ellipsis-v"></i>
            </span>
            <input
              type="checkbox"
              onChange={this.props.toggleComplete.bind(this, id)}
            />
            <span className="text">{title}</span>
            <small className="label ">
              <i className="fas fa-clock"></i> {when}
            </small>
            <div className="tools">
              <button
                onClick={this.props.removeTodo.bind(this, id)}
                className="btn btn-item"
              >
                <i style={{ color: " #dd4b39" }} className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoItem;
