import React from "react";

class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber() {
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return <button onClick={this.handleNumber}>나는버튼</button>;
  }
}

export default ClassExample;
