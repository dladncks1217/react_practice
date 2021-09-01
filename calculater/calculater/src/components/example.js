import React, {Component, useState } from 'react';
import CalButton from './CalButton';

class Example extends Component{
    state={
        value:'',
        value1:'',
        value2:'',
        name:'',
        result:'',
        operator:''
    }
    handleChange1=(e)=>{
        this.setState({
            value1:  e.target.value,
        })
    }
    handleChange2=(e)=>{
        this.setState({
            value2:  e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.value!==''){
            this.setState({
                result:this.state.value,
            })
        }
    }
    buttonClick=(e)=>{  
        console.log(e.target);
        this.setState({
            operator:e.target.value,
            // result:this.state.value1+this.target.value2,
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.value1} onChange={this.handleChange1}/>
            <span>   {this.state.operator}   </span>
            <input type='text' value={this.state.value2} onChange={this.handleChange2}/>
            <input type='text' placeholder="정답?" value={this.state.result}/>
            <button type="submit" >제출</button>
            <br/>
            <div>1번 입력값 : {this.state.value1}</div>
            <div>2번 입력값 : {this.state.value2}</div>
            <CalButton value="+" onClick={this.buttonClick}></CalButton>
            <CalButton value="-" onClick={this.buttonClick}></CalButton>
            <CalButton value="*" onClick={this.buttonClick}></CalButton>
            <CalButton value="/" onClick={this.buttonClick}></CalButton>
            <CalButton value="%" onClick={this.buttonClick}></CalButton>
            </form>
        );
    }
}

export default Example;