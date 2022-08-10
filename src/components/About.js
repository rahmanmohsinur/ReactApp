import React, {Component} from "react";

class About extends Component {
    render() {
        return(
            <>
                <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                    <div className="w3-display-middle">
                        <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span className="w3-hide-small">WEBSITE</span> LOGO</span>
                    </div>
                </div>

                <div className="w3-content w3-container w3-padding-64" id="about">
  <h3 className="w3-center">ABOUT ME</h3>
  <p className="w3-center"><em>I love photography</em></p>
  <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <div className="w3-row">
    <div className="w3-col m6 w3-center w3-padding-large">
      <p><b><i className="fa fa-user w3-margin-right"></i>My Name</b></p><br/>
      <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="img" />
    </div>

    
    <div className="w3-col m6 w3-hide-small w3-padding-large">
      <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
  <p className="w3-wide"><i className="fa fa-camera"></i>Photography</p>
  <div className="w3-light-grey">
    <div className="w3-container w3-padding-small w3-dark-grey w3-center">90%</div>
  </div>
  <p className="w3-wide"><i className="fa fa-laptop"></i>Web Design</p>
  <div className="w3-light-grey">
    <div className="w3-container w3-padding-small w3-dark-grey w3-center">85%</div>
  </div>
  <p className="w3-wide"><i className="fa fa-photo"></i>Photoshop</p>
  <div className="w3-light-grey">
    <div className="w3-container w3-padding-small w3-dark-grey w3-center">75%</div>
  </div>
</div>

<div className="w3-row w3-center w3-dark-grey w3-padding-16">
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">14+</span><br/>
    Partners
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">55+</span><br/>
    Projects Done
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">89+</span><br/>
    Happy Clients
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">150+</span><br/>
    Meetings
  </div>
</div>

            
            </>
        );
    }
}

export default About