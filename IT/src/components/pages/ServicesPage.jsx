import firstImg from "../../services_img/01.png";
import secondImg from "../../services_img/02.png";
import thirdImg from "../../services_img/03.png";
import FiftthImg from "../../services_img/05.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { CardContainer } from "../CardContainer";
import TestimonialTooltip from "./TestimonialTooltip";
import { useNavigate } from "react-router-dom";

function ServicesPage() {
    const navigate = useNavigate();  // Common navigation function

    // Reusable function for navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <div className="top services-top">
                <div className="width">
                    <div className="sub-top">
                        <div className="content-section-aboutus">
                            <div className="heading">
                                <h1>Our <span className="green">Service</span></h1>
                            </div>
                            <div className="paragraph">
                                <p>We provide the best service in Noida as a web, app, mobile development</p>
                            </div>
                        </div>
                        <div className="image-section-aboutus">
                            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*M4bxiCIjcTK-2Xr6.jpeg" alt="image not found" />
                        </div>
                    </div>
                </div>

                <div className="main-card-our-service">
                    <div className="heading-our-service">
                        <h1>// We Are Specialist We Offer for Grow Your <span className="green">Business</span></h1>
                    </div>

                    <CardContainer className="sub-card-out-service">
                        <div className="image-service">
                            <div className="images-s">
                                <img src={firstImg} />
                            </div>
                        </div>
                        <div className="content-our-service">
                            <div className="title-our-service">
                                <div className="heading-title">
                                    <h1> <span className="green">01 - </span>Web Site Development</h1>
                                </div>
                                <div className="para-title">
                                    <p>This is website development card</p>
                                </div>
                            </div>
                            <div className="para-our-service">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
                        <div className="arrow-main">
                            <div className="svg-araow" onClick={() => handleNavigation("/Websitedev")}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                    </CardContainer>

                    <CardContainer borderColor="#76B4FF" className="sub-card-out-service">
                        <div className="image-service">
                            <div className="images-s">
                                <img src={secondImg} />
                            </div>
                        </div>
                        <div className="content-our-service">
                            <div className="title-our-service">
                                <div className="heading-title">
                                    <h1> <span className="green">02 - </span>App Development</h1>
                                </div>
                                <div className="para-title">
                                    <p>This is App Development card</p>
                                </div>
                            </div>
                            <div className="para-our-service">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
                        <div className="arrow-main" onClick={() => handleNavigation("/appdevelopment")}>
                            <div className="svg-araow blue">
                                <FaArrowCircleRight />
                            </div>
                        </div>
                    </CardContainer>

                    <CardContainer borderColor="#32649E" className="sub-card-out-service">
                        <div className="image-service">
                            <div className="images-s">
                                <img src={thirdImg} />
                            </div>
                        </div>
                        <div className="content-our-service">
                            <div className="title-our-service">
                                <div className="heading-title">
                                    <h1> <span className="green">03 - </span>Digital Marketing</h1>
                                </div>
                                <div className="para-title">
                                    <p>This is Digital Marketing</p>
                                </div>
                            </div>
                            <div className="para-our-service">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
                        <div className="arrow-main">
                            <div className="svg-araow" onClick={() => handleNavigation("/digitalmarkting")}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                    </CardContainer>

                    <CardContainer borderColor="#3386CE" className="sub-card-out-service">
                        <div className="image-service">
                            <div className="images-s">
                                <img src={FiftthImg} />
                            </div>
                        </div>
                        <div className="content-our-service">
                            <div className="title-our-service">
                                <div className="heading-title">
                                    <h1> <span className="green">04 - </span>AI Integration</h1>
                                </div>
                                <div className="para-title">
                                    <p>This is AI integration card</p>
                                </div>
                            </div>
                            <div className="para-our-service">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
                        <div className="arrow-main">
                            <div className="svg-araow">
                                <FaArrowCircleRight />
                            </div>
                        </div>
                    </CardContainer>
                </div>

                <div className="main-technology">
                    <div className="technology-we-work-with">
                        <div className="headind-technology">
                            <h1>// Technology We <span className="green"> Work With</span></h1>
                        </div>
                        <div className="imag-tech">
                            <TestimonialTooltip />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
