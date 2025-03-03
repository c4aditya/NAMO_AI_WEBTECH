import React, { useState } from "react";
import Lottie from "lottie-react";
import ContactUs_animation from "../../animations/contactUs-animation.json";
import { CardContainer } from "../CardContainer";
function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handling form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.message) {
            alert("Please fill all required fields!");
            return;
        }
        console.log("Form Submitted: ", formData);
        alert("Form submitted successfully!");
    };

    return (
        <> 
        
            <div className="top contact-top">
                <div className="width">

                    <div className="poster-contact-us">
                        <div className="content-contact-us">
                            <div className="heading-contactus">
                                <h1> <sapn className="green">Contact Us</sapn></h1>
                            </div>

                            <div className="para-contactus">
                                <p>
                                    Need a website or mobile app? <span className="green">NAMO AI WEBTECH </span> is here to help!
                                    Contact us today to bring your ideas to life with our expert development team.
                                </p>
                            </div>
                        </div>


                        <div className="animation-contact-us">
                            <Lottie animationData={ContactUs_animation} />
                        </div>

                    </div>
                    <div className="contact-us-contant">
                        <div className="left-content-contact-us">
                            <div className="heading">
                                <h1>Let's Build Something <span className="green"> Great Together! </span></h1>
                            </div>

                            <div className="para">
                                <p>
                                    At <span className="green"> NAMO AI WEBTECH</span>, we specialize in crafting cutting-edge websites and mobile applications that drive business success. Whether you're a startup looking for a strong online presence or an enterprise in need of AI-driven solutions, we're here to help.   Contact us today to discuss your project requirements and let's turn your ideas into reality.
                                </p>

                            </div>
                        </div>


                        <div className="form-right-contact-us">
                            <div className="form-contact-us">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    /><br></br>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    /><br></br>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    /><br></br>

                                    <select name="subject" value={formData.subject} onChange={handleChange}>
                                        <option value="">Select Subject</option>
                                        <option value="inquiry">General Inquiry</option>
                                        <option value="support">Customer Support</option>
                                        <option value="feedback">Feedback</option>
                                    </select><br></br>

                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea><br></br>

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.31543222490075!2d77.38305229211467!3d28.618580330229065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff48e93f7d3%3A0x3954649815d0b89!2sVDS%20Technologies%20Business%20Centre!5e0!3m2!1sen!2sin!4v1736753110997!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </>

    );
}

export default Contact;
