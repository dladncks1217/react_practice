import React,{ Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  id=0;
  state={
    information:[
      {
        id:3,
        name:'홍길동',
        phone:'010-0000-0001',
      },
      {
        id:1,
        name:'김민준',
        phone:'010-0000-0002',
      },
      {
        id:2,
        name:'김벨로퍼트',
        phone:'010-0000-0003',
      }
    ],
  }
  handleCreate = (data) => {
    const {information} = this.state;
    console.log(data);
    this.setState({
      information:information.concat({
        ...data,
        id:this.id++
      }),
      // Object.assign({},data,id:this.id++);
    })
  }
  handleRemove = (id)=> {
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }
  handleUpdate=(id,data)=>{
    const {information} = this.state;
    this.setState({
      information:information.map(
        info=>{
          if(info.id===id){
            return {
              id,
              ...data,
            }
          }
          return info;
        }
      )
    });
  }
  render(){
    return (
      <div>
       <PhoneForm onCreate={this.handleCreate}/>
       <PhoneInfoList 
        data={this.state.information}
        onRemove={this.handleRemove}  
        onUpdate={this.handleUpdate}
      />
      </div>
    );
  }
}

export default App;
