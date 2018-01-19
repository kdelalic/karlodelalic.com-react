import React, { Component } from 'react';
import "../css/work.css";
import LinearProgress from 'material-ui/LinearProgress';
import IconButton from 'material-ui/IconButton';

const style = {
	height: 10,
	backgroundColor: "whitesmoke",
};

const styleIcon = {
    padding: 0,
};

const color = "#D24D57";

export default class Work extends Component {

    render() {
      return (
        <div className="work container">
            <div className="projects">
              <div className="project">
                  <h5 className="firstH5">Cryptonews | Chrome Extension</h5>
                  <p>Chrome new tab extension which displays latest crypto-currency news and updates from various sources. Made with ReactJS, NodeJS, Material UI, Firebase. (Under development)</p>
              </div>
              <div className="project">
                  <h5 className="firstH5">Cryptofolio | ReactJS Web App<IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/cryptofolio" iconClassName="icon ion-social-github" /> <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://loving-morse-4f5653.netlify.com/" iconClassName="icon ion-link" /></h5>
                  <p>Crypto-currency investment tracker portfolio. Made with ReactJS, Socket.io, Axios, Firebase, Material Design.</p>
              </div>
	            <div className="project">
	                <h5>Shuffle | ReactJS Web App <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/shuffle" iconClassName="icon ion-social-github" /> <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://goofy-hawking-3c9875.netlify.com/" iconClassName="icon ion-link" /></h5>
	                <p>A redevelopment of an open source YouTube shuffling app. Made with ReactJS, YouTube API V3, Material Design.</p>
	            </div>
	            <div className="project">
	                <h5>Piece Of Mind | Java EE Web App <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/PieceOfMind/" iconClassName="icon ion-social-github" /></h5>
	                <p>An application built on Apache Tomcat that provides analytics of the attitudes of Twitter users as individuals and as a collective. Made with Java EE,
Apache Tomcat, Twitter API</p>
	            </div>
	            <div className="project">
	                <h5>Leo D Photography | Bootstrap Portfolio <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/leodphotography.com" iconClassName="icon ion-social-github" /> <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="http://leodphotography.com/" iconClassName="icon ion-link" /></h5>
	                <p>Leodphotography.com is a photography portfolio made to showcase the artist's photography work and skills.</p>
	            </div>
	            <div className="project">
	                <h5>Delta Aluminum | Bootstrap Portfolio <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/deltaaluminum.com" iconClassName="icon ion-social-github" /> <IconButton style={styleIcon} target="_blank" rel="noopener noreferrer" href="http://deltaaluminum.com/" iconClassName="icon ion-link" /></h5>
	                <p>Deltaaluminum.com is a portfolio made to advertise a construction company's products and services.</p>
	            </div>
            </div>
            <div className="skills">
		        <div className="skill">
		            <p>JS</p>
		            <LinearProgress color={color} style={style} mode="determinate" value={85} />
		        </div>
                <div className="skill">
                  <p>HTML</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={95} />
                </div>
                <div className="skill">
                  <p>CSS</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={90} />
                </div>
                <div className="skill">
                  <p>ReactJS</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={63} />
                </div>
                <div className="skill">
                  <p>AngularJS</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={20} />
                </div>
                <div className="skill">
                  <p>NodeJS</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={35} />
                </div>
		        <div className="skill">
		            <p>Java</p>
		            <LinearProgress color={color} style={style} mode="determinate" value={90} />
		        </div>
                <div className="skill">
                  <p>Python</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={70} />
                </div>
                <div className="skill">
                  <p>Latex</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={74} />
                </div>
                <div className="skill">
                  <p>SQL</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={50} />
                </div>
                <div className="skill">
                  <p>NASM</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={40} />
                </div>
                <div className="skill">
                  <p>Bash</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={48} />
                </div>
                <div className="skill">
                  <p>Billiards</p>
                  <LinearProgress color={color} style={style} mode="determinate" value={100} />
                </div>
            </div>
        </div>
      );
    }
}