// import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";
import about_us_img from "../../Images/about-us-poster.png";
import our_misson_img from "../../Images/mission.png";
import our_vision_img from "../../Images/our-vision.png";
import team_avatar from "../../Images/team-avatar.png";
import { MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./page.css"

function Aboutus() {
    return (
        <>

            <div className="top">
                {/* <BackgroundBeamsWithCollision> */}
                <div className="width">

                    <div className="sub-top">

                        <div className="content-section-aboutus">
                            <div className="heading">
                                <h1>About <span className="green">Namo AI webtech</span> </h1>
                            </div>

                            <div className="paragraph">
                                <p>Namo  , delivering meaningful insights with speed and precision—no data team required.</p>
                            </div>

                            <div className="learnmore-btn">
                                <button> Larn More</button>
                            </div>

                        </div>


                        <div className="image-section-aboutus">
                            <img src={about_us_img}>
                            </img>

                        </div>

                    </div>

                    {/* our mission  */}

                    <div className="our-mission">
                        <div className="content">
                            <div className="heading-mid">
                                <h1>Our <span className="green">Mission</span> </h1>
                            </div>

                            <div className="paragraph-mid">
                                At Namowebtech, our mission is to empower businesses with cutting-edge digital solutions that drive real impact. We believe technology should be more than just code—it should enable growth, creativity, and seamless experiences. That’s why we focus on crafting innovative web solutions, intuitive designs, and high-performance applications that help brands stand out. With an innovation-first mindset, a people-centric approach, and a commitment to quality, we go beyond just delivering projects—we build experiences. Our goal is to create technology that transforms ideas into reality, fosters growth, and makes a lasting impact in the digital world.
                            </div>

                        </div>

                        <div className="mission-img">
                            <img src={our_misson_img} />
                        </div>
                    </div>


                    {/* our vision */}
                    <div className="our-vision">
                        <div className="content">
                            <div className="heading-mid">
                                <h1>Our <span className="green">Vision</span> </h1>
                            </div>

                            <div className="paragraph-mid">
                                At Namowebtech, our vision is to create a digital world where businesses, big or small, can harness the power of technology to innovate, grow, and thrive. We envision a future where seamless user experiences, smart automation, and cutting-edge web solutions drive success across industries. By constantly evolving, embracing new technologies, and prioritizing creativity, we aim to be at the forefront of digital transformation—helping brands not just keep up but lead in an ever-changing landscape. Our vision is to turn ideas into reality, challenges into opportunities, and businesses into success stories
                            </div>
                        </div>

                        <div className="mission-img">
                            <img src={our_vision_img} />
                        </div>
                    </div>


                    {/* our principle */}

                    <div className="our-principle">
                        <div className="content">
                            <div className="heading-mid">
                                <h1>Our <span className="green">Principle</span> </h1>
                            </div>
                        </div>

                        <div className="principles-card">
                            <div className="simple">
                                <div className="icon-text">
                                    <ul>
                                        <li><span className="icon-about-us green"><MdDesignServices /></span>  Simple design  </li>

                                    </ul>
                                </div>

                                <div className="simple-text">
                                    <p>At Namowebtech, we believe in simplicity, clarity, and functionality. Our designs are intuitive.</p>
                                </div>



                            </div>



                            <div className="simple">
                                <div className="icon-text">
                                    <ul>
                                        <li><span className="icon-about-us green">< FaHandshake /></span>  Our Trust  </li>
                                    </ul>
                                </div>

                                <div className="simple-text">
                                    <p>At Namowebtech, customer satisfaction is our top priority. We focus on understanding needs.</p>
                                </div>


                            </div>

                            <div className="simple">
                                <div className="icon-text">
                                    <ul>
                                        <li><span className="icon-about-us green"><BsPeopleFill /></span>  Customer Satisfication  </li>
                                    </ul>
                                </div>

                                <div className="simple-text">
                                    <p>At Namowebtech, trust is the foundation of everything we do.</p>
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* our team */}




                    <div className="our-team">

                        <div className="content">
                            <div className="heading-mid">
                                <h1>Our <span className="green">Team</span> </h1>
                            </div>

                            <div className="paragraph-mid">
                                <p>At Namowebtech, our team is a blend of passionate innovators, creative thinkers, and tech enthusiasts dedicated to bringing ideas to life. With expertise across various domains, we collaborate to craft cutting-edge solutions that drive success</p>
                            </div>
                        </div>

                        <div className="our-team-cards">
                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>


                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>

                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>


                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>

                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>

                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>

                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>


                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>


                            <div className="main-card">
                                <div className="avatar-icon-team">
                                    <div className="avatar-img">
                                        <img src={team_avatar} />

                                    </div>

                                    <div className="linkdine-icon">
                                        <FaLinkedin
                                        />
                                    </div>
                                </div>


                                <div className="team-name">
                                    <div className="name">
                                        <h1>Jashon Jackab</h1>
                                        <p>Washington, D.C</p>

                                    </div>


                                    <div className="post">
                                        <p> Senior Software Engineer </p>
                                    </div>
                                </div>


                            </div>




                        </div>



                    </div>










                </div>
                   {/* expert section */}
                   <div className="margin">
                <div className="connect-with-expert">
                
                    <div className="contect-with-expert-left">
                        <img src={team_avatar}/>

                    </div>

                    <div className="connect-with-expert-mid">
                        <div className="content-connect-heading">
                            <h1>Connect with an expert</h1>
                         
                        </div>

                        <div className="content-connect-para">
                            <p>Unlock your data's potential with Arch. Start transforming your business today</p>
                        </div>

                        <div className="content-connect-button">
                            <button> Speak to our team</button>
                        </div>
 
                   </div>


                   <div className="connect-with-expert-right">

                    <div className="top-right-image">
                    <img src={team_avatar}/>
                    
                    </div>

                    <div className="bottom-right-image">
                    <img src={team_avatar}/>

                    </div>
 
                   </div>


                </div>
                </div>
               
            </div>



        </>
    )
}

export default Aboutus;