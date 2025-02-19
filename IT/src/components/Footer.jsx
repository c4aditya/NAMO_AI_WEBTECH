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

function Footer() {
    return (
        <>
            <section className="footer">
                <hr className="lastLine"></hr>
                <div className="main-footer-section">
                    <div className="left-side-footer">
                        <div className="heading-left-side-footer">
                            <h1 className="green"> NAMO AI WEBTECH</h1>
                        </div>

                        <div className="content-left-side-footer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam a laborum quibusdam necessitatibus blanditiis qui ut culpa, sint consectetur.</p>
                        </div>

                        <div className="social-medias-links">
                            <ul>
                                <li><FaFacebookSquare /></li>
                                <li><FaInstagram /></li>
                                <li><CiLinkedin /></li>
                                <li>< FaTwitterSquare /></li>
                            </ul>


                        </div>

                    </div>
                    <div className="right-main-footer">
                        <div className="right-side-footer">
                            <div className="contact-us">
                                <ul>
                                    <p className="green">Contact us Info</p>
                                    <hr className="footer-line"></hr>
                                    <li><span className="iconscontact"><IoCall /></span> <sapn className="text"> +91 8465738394</sapn></li>
                                    <li><span className="iconscontact">< MdAttachEmail /></span> <sapn className="text"> namoIT@gmail.com</sapn></li>
                                    <li><span className="iconscontact"><FaRegAddressBook /></span> <sapn className="text"> Sector 63</sapn></li>



                                </ul>
                            </div>

                            <div className="contact-us">

                                <ul>
                                    <p className="green"> Information</p>
                                    <hr className="footer-line"></hr>
                                    <li><span className="iconscontact"><IoIosPeople /></span> <sapn className="text"> Our Team Memaber</sapn></li>
                                    <li><span className="iconscontact">< FaNetworkWired /></span> <sapn className="text"> What we do</sapn></li>
                                    <li><span className="iconscontact">< MdOutlineMiscellaneousServices /></span> <sapn className="text"> Our Services</sapn></li>
                                </ul>
                            </div>


                            <div className="pages">

                                <ul>
                                    <p className="green"> Our Pages</p>
                                    <hr className="footer-line"></hr>
                                    <li><span className="iconscontact"><FaHome /></span> <sapn className="text"> Home </sapn></li>
                                    <li><span className="iconscontact"><IoMdContact /></span> <sapn className="text">Contact Us </sapn></li>
                                    <li><span className="iconscontact">< FaNetworkWired /></span> <sapn className="text">About Us </sapn></li>
                                    <li><span className="iconscontact">< MdOutlineMiscellaneousServices /></span> <sapn className="text"> Our Services</sapn></li>
                                    <li><span className="iconscontact">< FaTasks /></span> <sapn className="text">Our Portfolio </sapn></li>




                                </ul>
                            </div>
                        </div>
                        <hr className="copy-right-line"></hr>
                        <div className="copyright">
                         <div className="lelft-copyright">
                            <ul>
                         <li><span className="iconscontact">< FaRegCopyright /></span> <sapn className="text"> 2025 all Copy rigth recived</sapn></li>
                             </ul>
                         </div>

                         <div className="mid-copyright">
                            <p>Security</p>
                            

                         </div>
                      </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;