import { Outlet, Link } from "react-router-dom";

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
        navbar.className = "w3-bar" + " w3-text-teal" + " w3-card" + " w3-animate-top" + " w3-white";
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

const Layout = () => {
  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-text-teal" id="myNavbar">
            <Link to="#" className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" 
            onClick={toggleFunction} title="Toggle Navigation Menu">
                <i className="fa fa-bars"></i>
            </Link>
            <Link to="/" className="w3-bar-item w3-button">HOME</Link>
            <Link to="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</Link>
            <Link to="/blogs" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PORTFOLIO</Link>
            <Link to="/contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</Link>
            <Link to="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                <i className="fa fa-search"></i>
            </Link>
        </div>

        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <Link to="/" className="w3-bar-item w3-button" onClick={toggleFunction}>ABOUT</Link>
            <Link to="/blogs" className="w3-bar-item w3-button" onClick={toggleFunction}>PORTFOLIO</Link>
            <Link to="/contact" className="w3-bar-item w3-button" onClick={toggleFunction}>CONTACT</Link>
            <Link to="#" className="w3-bar-item w3-button">SEARCH</Link>
        </div>
      </div>
      <Outlet />
    </>

    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/" className="do">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/blogs">Blogs</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Outlet />
    // </>
  )
};

export default Layout;