import React, {Component} from 'react';
import CalButton from './CalButton';

class Example extends Component{
    state={
        value:'',
        name:'',
        result:'',
    }
    handleChange=(e)=>{
        this.setState({
            value:  e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.value){
            this.setState({
                result:Number(this.state.value),
            })
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.value} onChange={this.handleChange}/>
            <input type='text' placeholder="정답?" value={this.state.result}/>
            <button type="submit" >제출</button>
            <br/>
            {this.state.value}
            <CalButton value="+"></CalButton>
            <CalButton value="-"></CalButton>
            <CalButton value="*"></CalButton>
            <CalButton value="/"></CalButton>
            <CalButton value="%"></CalButton>
            </form>
        );
    }
}

export default Example;