import React, {Component} from "react";

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
  
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
  
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

class Header extends Component {
    render() {
      return (
        <>
          <div className="w3-top">
            <div className="w3-bar" id="myNavbar">
                <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" 
                href="javascript:void(0);" onClick={toggleFunction} title="Toggle Navigation Menu">
                    <i className="fa fa-bars"></i>
                </a>
                <a href="#home" className="w3-bar-item w3-button">HOME</a>
                <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
                <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
                <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
                <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                    <i className="fa fa-search"></i>
                </a>
            </div>

            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" className="w3-bar-item w3-button" onClick={toggleFunction}>ABOUT</a>
                <a href="#portfolio" className="w3-bar-item w3-button" onClick={toggleFunction}>PORTFOLIO</a>
                <a href="#contact" className="w3-bar-item w3-button" onClick={toggleFunction}>CONTACT</a>
                <a href="#" className="w3-bar-item w3-button">SEARCH</a>
            </div>
          </div>
        </>
      );
    }
}

export default Header;