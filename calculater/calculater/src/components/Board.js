import React, { Component } from "react";
import CalButton from './CalButton';

const Board = () => {
    const handleClick = (e) => {
        this.setState({
            value: '100',
        })
    }
    return (
        <div>
            <input type="textbox"/>
            <CalButton value="1" onClick={handleClick}></CalButton>
            <CalButton value="2"></CalButton>
            <CalButton value="3"></CalButton>
            <CalButton value="4"></CalButton>
            <CalButton value="5"></CalButton>
            <CalButton value="6"></CalButton>
            <CalButton value="7"></CalButton>
            <CalButton value="8"></CalButton>
            <CalButton value="9"></CalButton>
            <CalButton value="*"></CalButton>
            <CalButton value="0"></CalButton>
            <CalButton value="+"></CalButton>
        </div>

    )
}
// class Board extends Component{
    
//     
//     render(){
//         console.log(CalButton);
//         return(
//             <div>
//                 <input type="textbox" value={this.state}/>
//                 <CalButton value="1" onClick={this.handleClick}></CalButton>
//                 <CalButton value="2"></CalButton>
//                 <CalButton value="3"></CalButton>
//                 <CalButton value="4"></CalButton>
//                 <CalButton value="5"></CalButton>
//                 <CalButton value="6"></CalButton>
//                 <CalButton value="7"></CalButton>
//                 <CalButton value="8"></CalButton>
//                 <CalButton value="9"></CalButton>
//                 <CalButton value="*"></CalButton>
//                 <CalButton value="0"></CalButton>
//                 <CalButton value="+"></CalButton>
//             </div>
            
//         )
//     }
// }

export default Board;