import './App.css'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    Name:"",
    Department:"",
    Rating:""
  }
  changename=(e)=>{
    this.setState({[e.target.name]:e.target.value})
 
  }
  changedepart=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  changerating=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  
  }
  addtask=()=>{
    let element=document.createElement("div")
    element.setAttribute("id","child")
    element.innerHTML=`<span>Name : ${this.state.Name}<span/> | <span>Department : ${this.state.Department}<span/> | <span>Rating : ${this.state.Rating}<span/>`
    document.getElementById("add").appendChild(element)
  }
  render() {
    return (
     <div className="container">
     <h2>EMPOLYEE FEEDBACK FORM</h2>
      <div>Name: <input type="text" name='Name' value={this.state.Name} onChange={this.changename}></input> </div>
      <br></br>
      <div>Department: <input type="text" name='Department' value={this.state.Department} onChange={this.changedepart}></input> </div>
      <br></br>
      <div>Rating: <input type="number" name='Rating' value={this.state.Rating} onChange={this.changerating} ></input> </div>
      <br></br>
      <button onClick={this.addtask}>Submit</button>
      <br></br>
      <div id='add' className="container2">
      
      </div>
     </div>

    )
  }
}

