import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderComponent from './SliderComponent';
class Home extends Component {
  render() {
    return (      
		<div className="bodySection">
			<section className="homeSlider">
				<SliderComponent />
			</section>
			<div className="theme-container">
				<div className="row">
					<div className="col-sm-4">
						<h2>About Me</h2>
						<h5>Photo of me:</h5>
						<div className="fakeimg">Fake Image</div>
						<p>Some text about me in culpa qui officia deserunt mollit anim..</p>
						<h3>Some Links</h3>
						<p>Lorem ipsum dolor sit ame.</p>
						<ul className="nav nav-pills flex-column">
							<li className="nav-item">
							<Link to="/" className="nav-link active">Home</Link>
							</li>
							<li className="nav-item">
							<Link to="/" className="nav-link">About</Link>
							</li>
							<li className="nav-item">                  
							<Link to="/" className="nav-link">ContactUs</Link>
							</li>
							<li className="nav-item">
							<Link to="/" className="nav-link disabled">Login</Link>
							</li>
						</ul>
						<hr className="d-sm-none" />
					</div>
					<div className="col-sm-8">
						<h2>TITLE HEADING</h2>
						<h5>Title description, Dec 7, 2017</h5>
						<div className="fakeimg">Fake Image</div>
						<p>Some text..</p>
						<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
						<br/>
						<h2>TITLE HEADING</h2>
						<h5>Title description, Sep 2, 2017</h5>
						<div className="fakeimg">Fake Image</div>
						<p>Some text..</p>
						<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
					</div>
				</div>
			</div>			
		</div>          
    );
  }
}

export default Home;
