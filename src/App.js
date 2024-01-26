import React from "react";
import TodoList from "./components/TodoList";
import "./App.css"; // Yeni eklenen stil dosyası

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
