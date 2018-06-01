import React, {PureComponent} from 'react';
import CountValue from './CountValue';

export default class Container2 extends PureComponent{
  render(){
    console.log("Container2 render");
    return(
      <div>
          <CountValue />
      </div>
    );
  }
}
