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
            <p className="w3-wide"><i className="fa fa-cloud"></i>Web Development</p>
            <div className="w3-light-grey">
              <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={webDeb}>95%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-laptop"></i>Software Programming</p>
            <div className="w3-light-grey">
              <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={softProg}>85%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-database"></i>Data Science</p>
            <div className="w3-light-grey">
              <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={dataScience}>80%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-photo"></i>Graphic Design</p>
            <div className="w3-light-grey">
              <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={dataScience}>60%</div>
            </div>
          </>
        );
    }
}

export default Skills


