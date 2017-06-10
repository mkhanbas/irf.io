import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

function Body() {
  AOS.init();
  return(
    <div className="theBody">
      <Title />
      <Img />
      <Boxes />
    </div>
  );
}

function Title(){
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

function Boxes() {
  return(
    <div className="boxes">
      <Box0 />
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  );
}

function Box0() {
  return(
    <div className="meeting">  
      <span className="iconPush">
        <i className="fa fa-calendar fa-3x"> </i>
      </span>
      <span className="captionTagMeeting"> meeting </span>
    </div>
  );
}
function Box1() {
  return(
    <div className="resume" data-aos=""> 
      <span className="iconPush">
        <i className="fa fa-file-text fa-3x"> </i>
      </span>
      <span className="captionTagMeeting"> resume </span>
    </div>
  );
}
function Box2() {
  return(
    <div className="github" data-aos=""> 
      <i className="fa fa-github fa-3x" aria-hidden="true"> </i>
      <span className="captionTag"> github </span>
    </div>
  );
}
function Box3() {
  return(
    <div className="linkedIn" data-aos=""> 
      <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"> </i>
      <span className="captionTag"> linkedIn </span>
    </div>
  );
}

//af1400



// ========================================

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);