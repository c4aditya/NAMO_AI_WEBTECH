import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { Link } from "react-router-dom"; // Import React Router

function Footer() {
    return (
        <>
            <section className="footer">
                <hr className="lastLine"></hr>
                <div className="main-footer-section">
                    <div className="left-side-footer">
                        <div className="heading-left-side-footer">
                            <h1 className="green"> NAMO WEBTECH AI</h1>
                        </div>
                        <div className="content-left-side-footer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam a laborum quibusdam necessitatibus blanditiis qui ut culpa, sint consectetur.</p>
                        </div>

                        <div className="social-medias-links">
                            <ul>
                                <li><FaFacebookSquare /></li>
                                <li><FaInstagram /></li>
                                <li><CiLinkedin /></li>
                                <li><FaTwitterSquare /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-main-footer">
                        <div className="right-side-footer">
                            <div className="pages">
                                <ul>
                                    <p className="green"> Our Pages</p>
                                    <hr className="footer-line"></hr>
                                    <li><span className="iconscontact"><FaHome /></span> <Link to="/" className="text">Home</Link></li>
                                    <li><span className="iconscontact"><IoMdContact /></span> <Link to="/contact_us" className="text">Contact Us</Link></li>
                                    <li><span className="iconscontact"><FaNetworkWired /></span> <Link to="/About_Us" className="text">About Us</Link></li>
                                    <li><span className="iconscontact"><MdOutlineMiscellaneousServices /></span> <Link to="/services" className="text">Our Services</Link></li>
                                    <li><span className="iconscontact"><FaTasks /></span> <Link to="/portfoliyo" className="text">Our Portfolio</Link></li>
                                </ul>
                            </div>

                            <div className="contact-us">
                                <ul>
                                    <p className="green">Contact us Info</p>
                                    <hr className="footer-line"></hr>
                                    <li><span className="iconscontact"><IoCall /></span> <span className="text"> +91 8465738394</span></li>
                                    <li><span className="iconscontact"><MdAttachEmail /></span> <span className="text"> namoIT@gmail.com</span></li>
                                    <li><span className="iconscontact"><FaRegAddressBook /></span> <span className="text"> Sector 63</span></li>
                                </ul>
                            </div>

                            <div className="contact-us">
                                <ul>
                                    <p className="green"> Information</p>
                                    <hr className="footer-line"></hr>
                                    <li><span className="iconscontact"><IoIosPeople /></span> <Link to="/team" className="text">Our Team Members</Link></li>
                                    <li><span className="iconscontact"><FaNetworkWired /></span> <Link to="/what-we-do" className="text">What We Do</Link></li>
                                    <li><span className="iconscontact"><MdOutlineMiscellaneousServices /></span> <Link to="/services" className="text">Our Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="copyright">
                <div className="lelft-copyright">
                    <ul>
                        <li><span className="iconscontact"><FaRegCopyright /></span> <span className="text"> 2025 All Rights Reserved</span></li>
                    </ul>
                </div>
            </div>

            
        </>
    );
}

export default Footer;
