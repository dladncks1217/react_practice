import React from "React";

export default class Child extends React.Component {
  constructor() {
    super();
    this.setNewText = this.setNewText.bind(this);
  }

  setNewText() {
    this.props.setNewText("텍스트바꿈");
  }
  render() {
    return <button onClick={this.setNewText}>텍스트 변경</button>;
  }
}
