import React from 'react';
import ReactDOM from 'react-dom';
import Comp2 from './comp2';

const Hello = () => {
   return (
        <div>
          <p>Hello world!!</p>
          <Comp2 />
          <p>have a good day</p>
        </div>
   )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
