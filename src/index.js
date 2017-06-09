import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';


function Title(){
  AOS.init();
  return (
    <div className="heading" data-aos="fade-left">
      <span className = "firstName">Mohammad </span> Irfan Khan
    </div>
  );
}
function Img() {
  return(
    <div className="prof" data-aos="fade-right"> </div>
  );
}
function Body() {
  return(
    <div>
      <Title />
      <Img />
    </div>
  );
}

//af1400



// ========================================

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);