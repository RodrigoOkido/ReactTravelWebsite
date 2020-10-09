import React from 'react';

// Stylesheet
import '../stylesheet/contactUs.css'

/**
 * ContactUs component. (Function based component)
 */
class ContactForm extends React.Component{  

    // Define state for each input field on the contact form.
    state = {subjectField: '', emailField: '', msgField: ''};


    // Keeps tracking and updating the name input field.
    onNameInputChange = (event) => {
        this.setState({subjectField: event.target.value})
    };


    // Keeps tracking and updating the email input field.
    onEmailInputChange = (event) => {
        this.setState({emailField: event.target.value})
    }


    // Keeps tracking the message text field.
    onMsgInputField = (event) => {
        this.setState({msgField: event.target.value})
    }


    // Execute action when user press the send button.
    // This only prints the actual states of each fields filled on alert.
    // The consistency of the data is not being made. For example, fill the email
    // field without the '@' will be valid.
    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.subjectField == '' || this.state.emailField == '' || this.state.msgField == '') {
            alert("All fields must be filled.")
        } else {
            alert("Message Sended!" + "\n" + 
                 this.state.subjectField + "\n" + 
                 this.state.emailField + "\n" + 
                 this.state.msgField);
            this.setState({subjectField: ''});
            this.setState({emailField: ''});
            this.setState({msgField: ''});
        }
    }


    // Render method.
    render() {
        return (    
            <div className="contact-section" id="contact">
                <div className="container contact">
                    <div className="row">
                        <h3>You can find us in the informations given below. Feel free to send us an email!</h3>
                        <div className="col-md-6 contact-info">
                            <span><span className="info">Address:</span> Av. A place somewhere, 899 </span>
                            <span><span className="info">Number:</span> (55) 9999-99999</span>
                            <span><span className="info">Email (@):</span> ourservices@website.com</span>
                        </div>
                        <div className="col-md-6">
                            <form className="contact-form" onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                    <label className="field-label">Subject:</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        placeholder="Type email subject" 
                                        onChange={this.onSubjectInputChange} 
                                        value={this.state.subjectField}    
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="field-label">Email:</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        placeholder="Type your email" 
                                        onChange={this.onEmailInputChange} 
                                        value={this.state.emailField}   
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="field-label">Message:</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="8" 
                                        placeholder="Type your text" 
                                        onChange={this.onMsgInputField} 
                                        value={this.state.msgField}   
                                    />
                                </div>
                                <button className="btn btn-warning" type="submit">Send</button>
                            </form>
                        </div>
    
                    </div>
                </div>
            </div>
        )
    } 
}

export default ContactForm;