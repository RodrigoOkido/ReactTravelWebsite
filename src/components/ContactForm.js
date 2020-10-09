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
    onSubjectInputChange = (event) => {
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
    // This only prints what is typed inside the fields.
    // The consistency of the data is not being made. For example, fill the email
    // field without the '@' will be valid.
    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.subjectField === '' || this.state.emailField === '' || this.state.msgField === '') {
            alert("All fields must be filled.")
        } else {
            alert("Message Sended! \n" + 
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
        let ourLocationMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7185.56358982155!2d-73.96902919280188!3d40.780555157041555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x89c25890becdb207%3A0xb61944a4f77aef47!2sCentral%20Park%20West%20Historic%20District%2C%20New%20York%2C%20NY%2010024%2C%20USA!3m2!1d40.7812116!2d-73.9666448!5e0!3m2!1sen!2sbr!4v1602272191027!5m2!1sen!2sbr" width="400" height="300"></iframe>';

        return (    
            <div className="contact-section" id="contact">
                <div className="container contact">
                    <div className="row">
                        <h3>-- You can find us in the informations given below. Feel free to send us an email! --</h3>
                        <div className="col-md-6 contact-info">
                            <span><span className="info">Address:</span> Av. A place somewhere, 899 </span>
                            <span><span className="info">Number:</span> (55) 9999-99999</span>
                            <span><span className="info">Email (@):</span> ourservices@website.com</span>

                            {/* As we can read, kind of insertion is NOT RECOMMENDED. This  
                             was used because this website is ONLY a demo. Do not contain
                             any sensitive data. Otherwise, its extremely recommended to 
                             change this for security.*/}
                            <div dangerouslySetInnerHTML={{__html: ourLocationMap}}></div>
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