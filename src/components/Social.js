import React, {Component} from "react";

class Social extends Component {
    render() {
        return(
            <>
                <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding: "24px 48px"}}>
                    <a href="https://github.com/rahmanmohsinur"><i className="fa fa-github-square mr-5 w3-text-black w3-hover-text-teal" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/mohsinur.rahman.104/"><i className="fa fa-facebook-official mr-5 w3-text-black w3-hover-text-teal"></i></a>
                    <a href="https://www.instagram.com/mohsinur.rahman.104/"><i className="fa fa-instagram mr-5 w3-text-black w3-hover-text-teal"></i></a>
                    <i className="fa fa-snapchat mr-5 w3-text-black w3-hover-text-teal"></i>
                    <i className="fa fa-pinterest-square mr-5 w3-text-black w3-hover-text-teal"></i>
                    <a href="https://twitter.com/mohsinur0rahman"><i className="fa fa-twitter-square mr-5 w3-text-black w3-hover-text-teal"></i></a>
                    <a href="https://www.linkedin.com/in/rahmanmohsinur/"><i className="fa fa-linkedin-square mr-5 w3-text-black w3-hover-text-teal"></i></a>
                </div>
            </>
        );
    }
}

export default Social