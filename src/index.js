import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {CountContext} from "./CountContext"
import Container1 from "./Container1"
import Container2 from "./Container2"

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "red"
  }
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      text: "",
      contextState:{
        count: 0,
        increment: this.increment
      }
    }
  }
    increment=()=>{
      this.setState({contextState: {...this.state.contextState, count: this.state.contextState.count + 1 }})
    }

    onChange = e => {
      const {value, name} = e.target;
      this.setState({[name]: value })}

render(){
  return(
    <CountContext.Provider value={this.state.contextState}>
      <div style={styles}>
        <input name="text" value={this.state.text} onChange={this.onChange} />
          <div>
            Count: {this.state.contextState.count}
          </div>
          <Container1 />
          <Container2 />
      </div>
    </CountContext.Provider>
  );
}}
ReactDOM.render(<App />, document.getElementById('root'));
