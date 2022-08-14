import React, {Component} from "react";

class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            comments: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handleCommentsChange = (event) => {
        this.setState({comments: event.target.value})
    }

    handleFormSubmit = event => {
        // window.open(`mailto:mixedbyinstinct@gmail.com?subject=${subject}&body=${body}`);
        alert(`${this.state.username} ${this.state.email} sent a message as: ${this.state.comments}`)
        event.preventDefault()
    }
    render() {
        const {username, email, comments} = this.state
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
                            <i className="fa fa-briefcase fa-fw w3-hover-text-black w3-large w3-margin-right"></i> IT Manager<br/>
                            <i className="fa fa-home fa-fw w3-hover-text-black w3-large w3-margin-right"></i> Canary Wharf, London, UK<br/>
                            <i className="fa fa-phone fa-fw w3-hover-text-black w3-large w3-margin-right"></i> Phone: +44 7459820285<br/>
                            <i className="fa fa-envelope fa-fw w3-hover-text-black w3-large w3-margin-right"></i> Email: mohsin@euroshopbd.com<br/>
                        </div>
                        <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
                        <form id="frmContact" onSubmit={this.handleFormSubmit}>
                            <div className="w3-row-padding">
                                <div className="w3-half w3-margin-bottom">
                                    <input className="w3-input w3-border" type="text" 
                                    value={username} 
                                    onChange = {this.handleUsernameChange}
                                    placeholder="Name" required name="Name"/>
                                </div>
                                <div className="w3-half w3-margin-bottom">
                                    <input className="w3-input w3-border" type="text" 
                                    value = {email}
                                    onChange = {this.handleEmailChange}
                                    placeholder="Email" required name="Email"/>
                                </div>
                            </div>
                            <input className="w3-input w3-border" type="text" 
                                    value = {comments}
                                    onChange = {this.handleCommentsChange}
                                    placeholder="Message" required name="Message"/>
                            <button className="w3-button w3-black w3-right w3-section" type="submit">
                                <i className="fa fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Contact;