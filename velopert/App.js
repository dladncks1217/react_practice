import React, {Component} from 'react';
import "./styles.css";
import MyName from'./Myname';

class App extends Component {
  render(){
    return (
      <div>
        <MyName name="리액트"/>
      </div>
    )
  }
}
export default App;