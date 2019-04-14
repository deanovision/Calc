import React, { Component } from "react";
import "./App.css";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import Display from "./Display";
import ClearButton from "./ClearButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "0"
    };
  }
  sendDisplay = number => {
    if (this.state.display[0] === "0") {
      this.setState({
        display: number
      });
    } else {
      this.setState(prevState => ({
        display: prevState.display + number
      }));
    }
  };
  getTotal = () => {
    this.setState({
      display: eval(this.state.display).toString()
    });
  };
  clearDisplay = () => {
    this.setState({
      display: "0"
    });
  };
  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <ClearButton clearDisplay={this.clearDisplay} value="Clear" />
        <NumberButton
          classStyle="operator"
          sendDisplay={this.sendDisplay}
          value="/"
        />
        <NumberButton sendDisplay={this.sendDisplay} value="7" />
        <NumberButton sendDisplay={this.sendDisplay} value="8" />
        <NumberButton sendDisplay={this.sendDisplay} value="9" />
        <NumberButton
          classStyle="operator"
          sendDisplay={this.sendDisplay}
          value="*"
        />
        <NumberButton sendDisplay={this.sendDisplay} value="4" />
        <NumberButton sendDisplay={this.sendDisplay} value="5" />
        <NumberButton sendDisplay={this.sendDisplay} value="6" />
        <NumberButton
          classStyle="operator"
          sendDisplay={this.sendDisplay}
          value="-"
        />
        <NumberButton sendDisplay={this.sendDisplay} value="1" />
        <NumberButton sendDisplay={this.sendDisplay} value="2" />
        <NumberButton sendDisplay={this.sendDisplay} value="3" />
        <NumberButton
          classStyle="operator"
          sendDisplay={this.sendDisplay}
          value="+"
        />
        <NumberButton
          classStyle="zero"
          sendDisplay={this.sendDisplay}
          value="0"
        />
        <ActionButton
          sendDisplay={this.sendDisplay}
          getTotal={this.getTotal}
          value="="
        />
      </div>
    );
  }
}

export default App;
