import React from 'react';
import upic1 from './IMG/lptt.jpg';



const Country = () => {
  let myStyle = {
    width: "100%",
    height: "auto"
  }

  return(
    <div>
      <img style={myStyle} src={upic1} alt="y la foto??" responsive />
    </div>
  );
}

export default Country;
