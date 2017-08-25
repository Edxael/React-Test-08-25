import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './MyComps/01-comp.jsx';

const MainCont = () => {
  return(
    <div>
      <p>Using the Main Cont 3</p>
      <br/>
      <Comp1/>
      <br/>
      <p>End</p>
    </div>
  );
}

ReactDOM.render(
  <MainCont/>, document.getElementById('root')
);
