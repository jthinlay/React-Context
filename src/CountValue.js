import React, {Component} from 'react'
import {CountContext} from "./CountContext"

export default class CountValue extends Component{
  render(){
    return(
      <CountContext.Consumer>
        {({count})=>console.log("CountValue render") || <div> CountValue: {count} </div>}
      </CountContext.Consumer>
    )
  }
}
