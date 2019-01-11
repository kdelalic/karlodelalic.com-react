import React, { Component } from 'react';
import "../css/about.css";
import ibm from '../img/ibm.png'
import phaseone from '../img/phaseone.png'
import gopher from '../img/gopher.png'
import Paper from 'material-ui/Paper';

const style = {
	backgroundColor: "#334661",
};

const depth = 4;

export default class About extends Component {

    render() {
      return (
        <div className="about container">
        	<p>My name is Karlo.</p>
            <p>I'm a third year undergraduate student at McMaster University pursuing my degree in Software Engineering.</p>
            <p>I participate in hackathons and online coding challenges such as HackerRank, make small projects, and hack random stuff.</p>
            <p>I enjoy exploring ways to better myself everyday. I like programming, building things and during my down time I like to unwind by playing video games.</p>
            <div className="dash"></div>
            <p className="small">Places I've worked at:</p>
			<div className="places">
				<div className="imgDiv">
					<a href="https://www.gopher.it/" target="_blank" rel="noopener noreferrer">
						<img className="left" src={gopher} alt={"Gopher Labs"}/>
					</a>
				</div>
				<div className="imgDiv">
					<a href="https://www.ibm.com/" target="_blank" rel="noopener noreferrer">
						<img className="middle" src={ibm} alt={"IBM"}/>
					</a>
				</div>
				<div className="imgDiv">
					<a href="http://www.phaseone.io/" target="_blank" rel="noopener noreferrer">
						<img className="right" src={phaseone} alt={"PhaseOne"}/>
					</a>
				</div>
            </div>
            <div className="dash"></div>
            <div className="cards">
	        	<Paper style={style} className="card" zDepth={depth}>
	        		<div className="title">
	        			<i className="icon ion-code"/>
	        			<h4>Development</h4>
	        		</div>
	        		<div className="dash"></div>
	        		<div className="description">
		                <p>Programming Languages: Java, Python, C</p>
		                <p>Web Technologies: Javascript, ReactJS, AngularJS, NodeJS, Git, SQL, CSS, HTML</p>
	        		</div>
	        	</Paper>
	        	<Paper style={style} className="card" zDepth={depth}>
	        		<div className="title">
	        			<i className="icon ion-earth"/>
	        			<h4>The World</h4>
	        		</div>
	        		<div className="dash"></div>
	        		<div className="description">
		                <p>I'm  <a target="_blank" rel="noopener noreferrer" href="https://www.16personalities.com/istp-personality">ISTP-T</a>. Besides coding, working out, learning, and playing CS:GO, I do my utmost best to better myself and the world around me everyday.</p>
	        		</div>
	        	</Paper>
	        	<Paper style={style} className="card" zDepth={depth}>
	        		<div className="title">
	        			<i className="icon ion-compose"/>
	        			<h4>Writing</h4>
	        		</div>
	        		<div className="dash"></div>
	        		<div className="description">
		                <p>Blog coming soon!</p>
	        		</div>
	        	</Paper>
        	</div>
        </div>
      );
    }
}