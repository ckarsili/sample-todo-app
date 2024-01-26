import React from "react";
import "./styles/Count.css"; // Yeni eklenen stil dosyası

class Count extends React.Component {
  render() {
    return (
      <div className="count-container">
        <p className="count-text">Number of Todos: {this.props.todoCount}</p>
      </div>
    );
  }
}

export default Count;
