import React from "react";

class MountExample extends React.Component {
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
    return <button onClick={this.handleNumber}>버튼임</button>;
  }
}

export default MountExample;
