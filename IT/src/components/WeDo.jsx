import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import work from  "../animations/work.json";
import Lottie from "lottie-react";

function WeDo() {
    return (
        <>
            

            {/* how we work  section  */}

            <div className="main-our-process">
                <div className="main-our-process-content">
                    <h1>Innovative & Simple <span className="green">IT  Solutions .</span> </h1>
                    <p>Shadow Infosystem helps small businesses grow with a clear and effective approach, making complex challenges easy to tackle.</p>
                </div>
                <div className="sub-our-process">            
                   <div className="right-our-process">  

                        <div className="step1">
                            <div className="stepnumber">
                                <IoIosCheckmarkCircleOutline/>
                               
                            </div>

                            <div className="step-content">
                                <h1>Customer-Centric Excellence</h1>
                                <p>
                                We focus on understanding our clients' needs, ensuring that every product we deliver aligns perfectly with their expectations.
                                </p>

                            </div>
                        </div>



                        <div className="step2">
                            <div className="stepnumber">
                            <IoIosCheckmarkCircleOutline/>
                            </div>

                            <div className="step-content">
                                <h1>Transparent Collaboration</h1>
                                   <p>We promote teamwork and open communication, ensuring transparency by keeping all channels accessible to customers</p>
                                 

                            </div>
                        </div>


                        <div className="step3">
                            <div className="stepnumber">
                            <IoIosCheckmarkCircleOutline/>
                            </div>

                            <div className="step-content">
                                <h1>Value-Driven Delivery</h1>
                                <p>We prioritize delivering value consistently, enabling businesses to focus on high-impact features for better returns.</p>

                            </div>
                        </div>


                        <div className="step4">
                            <div className="stepnumber">
                            <IoIosCheckmarkCircleOutline/>
                            </div>

                            <div className="step-content">
                                <h1>Let's Develop</h1>
                                 <p>Let's make it happen your project with our best developers</p>

                            </div>
                        </div>
                          


                          



                    </div>
                    
                    <div className="left-our-process">
                     <div className="animation-we-do">

                     <Lottie animationData={work} loop={true} className="work-animation" />
                     </div>
                    

                    </div>
                </div>
            </div>
        </>
    )
}

export default WeDo;