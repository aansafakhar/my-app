import React from 'react';
import { render } from 'react-dom';
import HelloWorld from '../components/HelloWorld';

render(<HelloWorld greeting={"Welcome to My APP"} />, document.querySelector('#root'));
