import React from 'react';
import ReactDOM from 'react-dom';
import spdf from "simple-react-pdf";
import SkyLight from 'react-skylight';
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
    <div className="heading" data-aos="slide-left">
      <span className = "firstName">Mohammad </span> Irfan Khan
      <br/>
      <span className ="subheading"> software engineer </span>
    </div>
  );
}

function Img() {
  return(
    <div className="prof" data-aos="slide-right"> </div>
  );
}
function Cale(){
  const script = document.createElement("script");
  script.type = "text/javascript"
  script.src = "https://calendly.com/assets/external/widget.js";

  document.body.appendChild(script);
  return(
    
      <div className="calendly-inline-widget" data-url = 'https://calendly.com/mkhanbas/30min'> </div>
  );
}


class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show0: true,
      show1: true,
      show2: true,
      show3: true
    }
    this.click0 = this.click0.bind(this);
  }
    click0() {
      this.refs.simpleDialog.show()
    }
    click1() {
      this.refs.simpleDialog1.show()
    }

  render(){
      var myBigGreenDialog = {
      backgroundColor: '#ffffff',
      color: '#ffffff',
      width: '80%',
      height: '70%',
      zIndex: 150,
      top: '40%',
      left: '35%'
    };
    
    return(
      <div className="boxes">
      <Box0 
        show = {this.show0}
        onClick = {() => this.click0(this)}
      />
      <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog">
       <Cale />
      </SkyLight>
      <Box1 
        show = {this.show1}
      />
      <Box2 
        show = {this.show2}
      />
      <Box3 
        show = {this.show3}
      />
      
    </div>
    );
  }


}


class Box0 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }

  
  render(){
  
    
    return(
      <div className="meeting"  data-aos="fade-up" data-aos-delay="200" style={{ display: this.show ? 'none' : 'inline-block' }}>  
        <a onClick={this.props.onClick}> </a>
        
        <span className="iconPush" onClick={this.props.onClick}>
          <i className="fa fa-calendar fa-3x"> </i>
        </span>
        <span className="captionTagMeeting"> meeting </span>
      </div>
    );
  }
}

class Box1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }
  
  render(){
    return(
      <div className="resume" href='Resume.pdf' target='_blank'  data-aos="fade-up" data-aos-delay="400" style={{ display: this.show ? 'none' : 'inline-block'  }}> 
        <a href='Resume.pdf' target='_blank'> 
        <span className="iconPush">
          <i className="fa fa-file-text fa-3x"> </i>
        </span>
        <span className="captionTagResume"> resumé </span>
        </a>
      </div>
    );
  }
}
class Box2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }
  
  render(){
    return(
      
        <div className="github"  data-aos="fade-up" data-aos-delay="600" style={{ display: this.show ? 'none' : 'inline-block'  }}> 
          <a href="https://github.com/mkhanbas" target='_blank'></a>
            <i className="fa fa-github fa-3x" aria-hidden="true"> </i>
          
          <span className="captionTag"> github </span>
        </div>
      
    );
  }
}
class Box3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }
  
  render(){
    return(
      
        <div className="linkedIn"  data-aos="fade-up" data-aos-delay="800" style={{ display: this.show ? 'none' : 'inline-block'  }}> 
          <a href="https://www.linkedin.com/in/mohammad-khan-5a0592105" target='_blank'> </a>
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"> </i>
          <span className="captionTag"> linkedIn </span>
        </div>
      
    );
  }
}

//af1400



// ========================================

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);