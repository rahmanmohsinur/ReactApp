import React, { useEffect, useState } from "react";

class ContactForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    handleSubmit = (e) =>{
  e.preventDefault();

  fetch('http://amanadirects.co.uk/mail.php', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
    (response) => (response.json())
      ).then((response)=> {
    if (response.status === 'success') {
      alert("Message Sent.");
      this.resetForm()
    } else if(response.status === 'fail') {
      alert("Message failed to send.")
    }
  })
}
  
    resetForm = () =>{
      this.setState({name: '', email: '', message: ''})
    }

    onNameChange = (event) => {
      this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
      this.setState({email: event.target.value})
    }

    onMessageChange = (event) => {
      this.setState({message: event.target.value})
    }
  
    render() {
      const {username, email, comments} = this.state
      return(
        <>
          <form id="frmContact" onSubmit={this.handleSubmit} method="POST">
            <div className="w3-row-padding">
              <div className="w3-half w3-margin-bottom">
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" className="w3-input w3-border" id="name" 
                value={this.state.name} placeholder="Naame"
                onChange={this.onNameChange} required />
              </div>
              <div className="w3-half w3-margin-bottom">
                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                <input type="email" className="w3-input w3-border" id="email" aria-describedby="emailHelp" 
                value={this.state.email} placeholder="Email"
                onChange={this.onEmailChange} required />
              </div>
            </div>
              <div className="">
                {/* <label htmlFor="message">Message</label> */}
                <textarea className="w3-input w3-border" rows="5" id="message" 
                value={this.state.message} placeholder="Message"
                onChange={this.onMessageChange} required />
              </div>
              <button type="submit" className="w3-button w3-teal w3-hover-teal w3-opacity w3-hover-opacity-off w3-right w3-section">
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
          </form>
        </>
      );
    }
  }
  
  export default ContactForm;