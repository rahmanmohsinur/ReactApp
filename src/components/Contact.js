import React, {Component} from "react";
import ContactForm from "./ContactForm";
import ErrorBoundary from "./ErrorBoundary";

class Contact extends Component {
    render() {
        return(
            <>
            {/* <!-- Third Parallax Image with Portfolio Text --> */}
            <div className="bgimg-3 w3-display-container w3-opacity-min">
                <div className="w3-display-middle">
                    <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
                </div>
            </div>
            {/* <!-- Container (Contact Section) --> */}
            <div className="w3-content w3-container w3-padding-64" id="contact">
                <h3 className="w3-center">WHERE I WORK</h3>
                <p className="w3-center"><em>I'd love your feedback!</em></p>
                <div className="w3-row w3-padding-32 w3-section">
                    <div className="w3-col m4 w3-container">
                        <img src="/img/parallax1.jpg" className="w3-image w3-round" alt="img" />
                    </div>
                    <div className="w3-col m8 w3-panel">
                        <div className="w3-large w3-margin-bottom">
                            <i className="fa fa-briefcase fa-fw w3-text-teal w3-opacity w3-hover-opacity-off w3-large w3-margin-right"></i> IT Manager<br/>
                            <i className="fa fa-home fa-fw w3-text-teal w3-opacity w3-hover-opacity-off w3-large w3-margin-right"></i> Canary Wharf, London, UK<br/>
                            <i className="fa fa-phone fa-fw w3-text-teal w3-opacity w3-hover-opacity-off w3-large w3-margin-right"></i> Phone: +44 7459820285<br/>
                            <i className="fa fa-envelope fa-fw w3-text-teal w3-opacity w3-hover-opacity-off w3-large w3-margin-right"></i> Email: mohsin@euroshopbd.com<br/>
                        </div>
                        <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
                        
                        <ErrorBoundary>
                            <ContactForm />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Contact;