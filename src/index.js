import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './MyComps/01-comp.jsx';
import Menu1 from './MyComps/03-bt-menu.jsx';
import Banda from './MyComps/02-pic.jsx';
import 'bootstrap/dist/css/bootstrap.css';

const MainCont = () => {
  let myStyle = {
    backgroundColor: "gray",
    width: "788px"
  }

  return(
    <div className="container" style={myStyle}>
      <Comp1/>
      <Menu1/>
      <Banda/>
      <p>  By: Edmundo Rubio 3</p>
    </div>
  );
}

ReactDOM.render(
  <MainCont/>, document.getElementById('root')
);
