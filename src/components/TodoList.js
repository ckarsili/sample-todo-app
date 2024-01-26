import React from "react";
import "./styles/TodoList.css"; // Yeni eklenen stil dosyası

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Task 1", "Task 2", "Task 3"],
      newTodo: "",
      editIndex: null,
      editTodo: "",
    };
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos: newTodos,
      newTodo: "",
    });
  };

  handleDelete = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  handleEdit = (index) => {
    const todoToEdit = this.state.todos[index];
    this.setState({
      editIndex: index,
      editTodo: todoToEdit,
    });
  };

  handleResubmit = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index] = this.state.editTodo;
    this.setState({
      todos: newTodos,
      editIndex: null,
      editTodo: "",
    });
  };

  handleEditChange = (e) => {
    this.setState({ editTodo: e.target.value });
  };

  render() {
    return (
      <div className="todo-container">
        <ul  className="todo-list">
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={this.state.editTodo}
                    onChange={(e) => this.handleEditChange(e)}
                  />
                  <button onClick={() => this.handleResubmit(index)}>Resubmit</button>
                </div>
              ) : (
                <div>
                  {todo}
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
