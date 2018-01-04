import React, { Component } from 'react';
import "../css/home.css";
import RaisedButton from 'material-ui/RaisedButton';
import {NavLink} from "react-router-dom";

const style = {
	height: 50,
}

export default class Home extends Component {

    render() {
      return (
        <div className="home container">
        	<h1 className="motto">I make great things, and explore ways to push the barrier</h1>
        	<NavLink to="/about">
	        	<RaisedButton style={style} className=" learnMore pulse-button"
	            href="https://karlodelalic.com/resume/Karlo_Delalic_Resume.pdf"
	            target="_blank"
	            labelPosition="before"
	            label="Learn About Me"
	            primary={true}
	            icon={<i className="icon ion-arrow-right-c"/>}
	          	/>
          	</NavLink>
        </div>
      );
    }
}