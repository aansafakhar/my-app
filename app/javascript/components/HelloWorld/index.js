import React, { Component } from "react"

import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

class HelloWorld extends Component {
  render() {
    return (
      <div className={'justify-content-center align-items-center h-100-vh greeting'}>
        < h1 > Welcome </h1 >
      </div >
    );
  }
}
export default HelloWorld
