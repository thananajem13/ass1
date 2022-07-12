import React, { Component } from 'react'
import './Contact.css'
import $ from 'jquery'
export default class Contact extends Component {
    state = {
        errName:"",
        errEmail:"",
        errPhone:"",
        errMsg:"",
    }
    componentDidMount() {
        $('#contactForm').submit(function (event) {
            event.preventDefault();
        });
    }
    sendMail=()=> {
        var link = "mailto:thana.najem13@gmail.com"
            + "&subject=" + encodeURIComponent("This is my subject")
            + "&body=" + encodeURIComponent(document.getElementById('message').value)
            ;

        window.location.href = link;

    }
    validation=()=> { 
          if (this.validateName() & this.validatePhone() & this.validateEmail() & this.validateMessage()) {
            this.sendMail();
            $('#success').html("Email sent successfully");
        }
        else {
            $('#success').html("Can't send successfully");
        }

    }
    validateName=()=> { 

        if ($('#name').val().length === 0) {
            this.setState({errName:"Please enter your name."}) 
            return false;
        }
        else {  
            this.setState({errName:""})

            return true;
        }
    }
    validatePhone=()=> { 
        if ($('#phone').val().length === 0) { 
            this.setState({errPhone:"Please enter your phone number."})
            return false;
        }
        else { 
            this.setState({errPhone:""})

            return true;
        }
    }
    validateMessage=()=> { 
        console.log($('#message').val().length)
        if ($('#message').val().length === 0) { 
            this.setState({errMsg:"Please enter a message."})
            return false;
        }
        else { 
            this.setState({errMsg:""})
            return true;
        }
    }
    validateEmail=()=> { 
        if ($('#email').val().length === 0) { 
            this.setState({errEmail:"Please enter your email address."})
            return false;
        }
        else { 
            this.setState({errEmail:""})
            return true;
        }
    }
    render() {
        return (
            <> 
                <section className="page-section-" id="contact">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"> <i className="fa-solid fa-star"></i> </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input className="form-control" id="name" type="text" placeholder="Name" required="required" onChange={this.validateName} data-validation-required-message="Please enter your name."   />
                                            <p className="help-block text-danger">{this.state.errName}</p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" onChange={this.validateEmail} data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger">{this.state.errEmail}</p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" onChange={this.validatePhone}  data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger">{this.state.errPhone}</p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" onChange={this.validateMessage} data-validation-required-message="Please enter a message."></textarea>
                                            <p className="help-block text-danger">{this.state.errMsg}</p>
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" className="text-danger mb-2"></div>
                                    <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={this.validation}>Send</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
