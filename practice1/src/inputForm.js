import React, { Component } from "react";
import "./index.css";

class InputForms extends Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
    };
  }

  handleChange(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
    console.log(event.target.value);
  }

  buttonReset() {
    this.setState({
      searchKeyword: "",
    });
    console.log("삭제완료");
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("검색어 입력: ", this.state.searchKeyword);
  }

  render() {
    return (
      <>
        <header>
          <h2>검색</h2>
        </header>
        <div>
          <form
            onReset={() => this.buttonReset()}
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChange(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type="reset">x</button>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default InputForms;
