import React, { Component } from "react";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert("21BQ5A0508 SAYS hElL0!");
  }
  render() {
    return (
      <div>
        {" "}
        <button onClick={this.sayHello}>Click me!</button>{" "}
      </div>
    );
  }
}

export default MyApp;
