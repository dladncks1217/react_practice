import React from "React";

export default class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      check: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.check);
  };
  onChanges = (e) => {
    this.setState({
      check: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.check}
            onChange={this.onChanges}
          />
        </form>
      </>
    );
  }
}
