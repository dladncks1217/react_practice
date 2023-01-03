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
    this.setState({
      // number: this.state.number + 1,
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.number === nextState.number) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <>
        <button onClick={this.handleNumber}>나는버튼</button>
      </>
    );
  }
}

export default MountExample;
