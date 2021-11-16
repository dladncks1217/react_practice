import React from "React";
import Child from "./Child";

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.setText = this.setText.bind(this);
  }

  setText(newtext) {
    this.setState({
      text: newtext,
    });
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.text} onChange={this.setText} />
        <Child setNewText={this.setText} />
      </>
    );
  }
}
