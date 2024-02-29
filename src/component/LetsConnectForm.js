import React, { useState } from 'react';
import './css/LetsConnectForm.css';

function LetsConnectForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
    });


    return (
        <div id='letsConnectForm' className="connect-form">
            <h1 className="form-heading">Let's Connect</h1>
            <form className="form-container">
                <div className="form-group-row ">
                    <div className='form-item-cont'>
                        <label htmlFor="fullName ">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} required />
                    </div>
                    <div className='form-item-cont'> <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} required /></div>
                    <div className='form-item-cont'><label htmlFor="contactNumber">Contact Number</label>
                        <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} /></div>


                </div>

                <div className="form-group-column">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} />
                </div>
                <div className="form-group-column">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} rows="10" />
                </div>
                <button type="submit">Submit form</button>
            </form>
        </div>
    );
}

export default LetsConnectForm;