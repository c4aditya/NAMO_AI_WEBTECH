import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import work from "../animations/work.json";
import Lottie from "lottie-react";
import { CardContainer } from "./CardContainer";

function WeDo() {
    return (
        <>
            {/* how we work section */}
            <div className="movingcarda-background-color">
                <div className="main-our-process">
                    
                    {/* White Border Effect */}
                    <CardContainer borderColor="#75D8BD">
                 <div className="our-process-content-heading">
                    <div className="our-process-heading">
                        <h1>// Our <span className="green"> Process</span> </h1>

                    </div>
                    <div className="our-process-para">
                     <p>Our process is very easy for develope your dream project and we get it to you </p>
                    </div>
                 </div>
                         
                     
                        <div className="sub-our-process">
                            
                            <div className="right-our-process">

                                <div className="step1">
                                    <div className="stepnumber">
                                        <IoIosCheckmarkCircleOutline />
                                    </div>
                                    <div className="step-content">
                                        <h1>Customer-Centric Excellence</h1>
                                        <p>We focus on understanding our clients' needs, ensuring that every product we deliver aligns perfectly with their expectations.</p>
                                    </div>
                                </div>

                                <div className="step2">
                                    <div className="stepnumber">
                                        <IoIosCheckmarkCircleOutline />
                                    </div>
                                    <div className="step-content">
                                        <h1>Transparent Collaboration</h1>
                                        <p>We promote teamwork and open communication, ensuring transparency by keeping all channels accessible to customers.</p>
                                    </div>
                                </div>

                                <div className="step3">
                                    <div className="stepnumber">
                                        <IoIosCheckmarkCircleOutline />
                                    </div>
                                    <div className="step-content">
                                        <h1>Value-Driven Delivery</h1>
                                        <p>We prioritize delivering value consistently, enabling businesses to focus on high-impact features for better returns.</p>
                                    </div>
                                </div>

                                <div className="step4">
                                    <div className="stepnumber">
                                        <IoIosCheckmarkCircleOutline />
                                    </div>
                                    <div className="step-content">
                                        <h1>Let's Develop</h1>
                                        <p>Let's make it happen your project with our best developers.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="left-our-process">
                                <div className="animation-we-do">
                                    <Lottie animationData={work} loop={true} className="work-animation" />
                                </div>
                            </div>

                        </div>
                    </CardContainer>
                </div>
            </div>
        </>
    );
}

export default WeDo;
