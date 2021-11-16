import React from "React";
import Child from "./Child";

export default class Parent extends React.Component {
  constructor() {
    super();
  }

  onSubmit(text) {
    console.log("부모에서 콘솔찍음 " + text);
  }

  render() {
    return (
      <div>
        <Child onSubmit={this.onSubmit} />
      </div>
    );
  }
}
