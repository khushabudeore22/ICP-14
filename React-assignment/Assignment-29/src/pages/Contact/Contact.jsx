import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Have questions or need custom floral arrangements? Reach out to us!</p>
            </div>

            <div className="contact-container">
                {/* Contact Information */}
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>We'd love to hear from you. Stop by our shop or contact us directly.</p>

                    <div className="info-item">
                        <span className="icon">📍</span>
                        <div>
                            <strong>Address</strong>
                            <p>123 Blossom Street, Floral City, FC 56789</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">📞</span>
                        <div>
                            <strong>Phone</strong>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">✉️</span>
                        <div>
                            <strong>Email</strong>
                            <p>support@flowershop.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">🕒</span>
                        <div>
                            <strong>Business Hours</strong>
                            <p>Mon - Sat: 8:00 AM - 8:00 PM<br />Sun: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-wrapper">
                    {submitted && (
                        <div className="success-message">
                            🎉 Thank you for reaching out! We will get back to you shortly.
                        </div>
                    )}

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="e.g. Wedding flowers inquiry"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
