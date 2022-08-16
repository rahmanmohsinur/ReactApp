import React, {Component} from "react";

const webDeb = { width: '95%'}
const softProg = { width: '85%'}
const dataScience = { width: '80%'}
const photoShop = { width: '60%'}

class Skills extends Component {
    render() {
        return(
          <>
            <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
            <p className="w3-wide"><i className="fa fa-cloud w3-text-teal w3-opacity w3-hover-opacity-off"></i>Web Development</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-container w3-center w3-round-xlarge w3-teal w3-opacity w3-hover-opacity-off" style={webDeb}>95%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-laptop w3-text-teal w3-opacity w3-hover-opacity-off"></i>Software Programming</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-container w3-center w3-round-xlarge w3-teal w3-opacity w3-hover-opacity-off" style={softProg}>85%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-database w3-text-teal w3-opacity w3-hover-opacity-off"></i>Data Science</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-container w3-center w3-round-xlarge w3-teal w3-opacity w3-hover-opacity-off" style={dataScience}>80%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-photo w3-text-teal w3-opacity w3-hover-opacity-off"></i>Graphic Design</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-container w3-center w3-round-xlarge w3-teal w3-opacity w3-hover-opacity-off" style={photoShop}>60%</div>
            </div>
          </>
        );
    }
}

export default Skills


