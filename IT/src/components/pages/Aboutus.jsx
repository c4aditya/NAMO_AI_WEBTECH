// import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";
import about_us_img from "../../Images/about-us-poster.png";
import our_misson_img from "../../Images/mission.png";
import our_vision_img from "../../Images/our-vision.png";
import team_avatar from "../../Images/team-avatar.png";
import { MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

// importing images of developers
import firsrimg from "../../OurTeamImages/01.jpg"
import secondimg from "../../OurTeamImages/02.jpg"
import thirdimg from "../../OurTeamImages/03.jpg"
import fourthimg from "../../OurTeamImages/04.jpg"
import fifthimg from "../../OurTeamImages/04.jpg"
import siximg from "../../OurTeamImages/05.jpg"
import seventhimg from "../../OurTeamImages/06.jpg"
import eightimg from "../../OurTeamImages/07.jpg"
import nineimg from "../../OurTeamImages/07.jpg"
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
                                <h1>// Our <span className="green">Mission</span> </h1>
                            </div>

                            <div className="paragraph-mid">
                              <p>  At <span className="green"> Namo web tech</span>, our mission is to empower businesses with cutting-edge digital solutions that drive real impact. We believe technology should be more than just code—it should enable growth, creativity, and seamless experiences. That’s why we focus on crafting innovative web solutions, e digital world.
                              </p>
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
                                <h1>// Our <span className="green">Vision</span> </h1>
                            </div>

                            <div className="paragraph-mid">
                              <p>  At <span className="green">Namowebtech</span>, our vision is to create a digital world where businesses, big or small, can harness the power of technology to innovate, grow, and thrive. We envision a future where seamless user experiences, smart automation, and cutting-edge web solutions drive success across industries.  stories
                               </p>
                            </div>
                        </div>

                        <div className="our-vision_img">
                            <img src={our_vision_img} />
                        </div>
                    </div>


                    {/* our principle */}

                    <div className="our-principle">
                        <div className="content">
                            <div className="heading-mid">
                                <h1>//  Our <span className="green">Principle</span> </h1>
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
                                    <p>At <span className="green">Namowebtech</span> we believe in simplicity, clarity, and functionality. Our designs are intuitive.</p>
                                </div>



                            </div>



                            <div className="simple">
                                <div className="icon-text">
                                    <ul>
                                        <li><span className="icon-about-us green">< FaHandshake /></span>  Our Trust  </li>
                                    </ul>
                                </div>

                                <div className="simple-text">
                                    <p>At <span className="green">Namowebtech</span>, customer satisfaction is our top priority. We focus on understanding needs.</p>
                                </div>


                            </div>

                            <div className="simple">
                                <div className="icon-text">
                                    <ul>
                                        <li><span className="icon-about-us green"><BsPeopleFill /></span>  Customer Satisfication  </li>
                                    </ul>
                                </div>

                                <div className="simple-text">
                                    <p>At <span className="green">Namowebtech</span>, trust is the foundation of everything we do.</p>
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* our team */}




                    <div className="our-team">
    <div className="content">
        <div className="heading-mid">
            <h1>// Our <span className="green">Team</span></h1>
        </div>
    </div>

    <div className="our-team-cards">
        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={firsrimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Michael Smith</h1>
                    <p>New York, USA</p>
                </div>
                <div className="post">
                    <p>Senior Software Engineer</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={secondimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Sarah Johnson</h1>
                    <p>Los Angeles, USA</p>
                </div>
                <div className="post">
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={thirdimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>David Brown</h1>
                    <p>Chicago, USA</p>
                </div>
                <div className="post">
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={fourthimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Emily Davis</h1>
                    <p>San Francisco, USA</p>
                </div>
                <div className="post">
                    <p>Backend Developer</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={fifthimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Christopher Wilson</h1>
                    <p>Seattle, USA</p>
                </div>
                <div className="post">
                    <p>Project Manager</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={siximg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Amanda Martinez</h1>
                    <p>Miami, USA</p>
                </div>
                <div className="post">
                    <p>Marketing Head</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={seventhimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Daniel Anderson</h1>
                    <p>Austin, USA</p>
                </div>
                <div className="post">
                    <p>DevOps Engineer</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={eightimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>Olivia Thomas</h1>
                    <p>Boston, USA</p>
                </div>
                <div className="post">
                    <p>Data Scientist</p>
                </div>
            </div>
        </div>

        <div className="main-card">
            <div className="avatar-icon-team">
                <div className="avatar-img">
                    <img src={nineimg} className="rounded-full w-30 h-30 object-cover border-2 border-white"/>
                </div>
                <div className="linkdine-icon">
                    <FaLinkedin/>
                </div>
            </div>
            <div className="team-name">
                <div className="name">
                    <h1>William Harris</h1>
                    <p>Denver, USA</p>
                </div>
                <div className="post">
                    <p>Cyber Security Analyst</p>
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
                        <img src={seventhimg}/>

                    </div>

                    <div className="connect-with-expert-mid">
                        <div className="content-connect-heading">
                            <h1> <span className="green"> Connect</span> with an <span className="green">expert</span></h1>
                         
                        </div>

                        <div className="content-connect-para">
                            <p>Unlock your data's potential with <span className="green">Namo Webtech AI </span>. Start transforming your business today</p>
                        </div>

                        <div className="content-connect-button">
                            <button> Speak to our team</button>
                        </div>
 
                   </div>


                   <div className="connect-with-expert-right">

                    <div className="top-right-image">
                    <img src={fifthimg}/>
                    
                    </div>

                    <div className="bottom-right-image">
                    <img src={secondimg}/>

                    </div>
 
                   </div>


                </div>
                </div>
               
            </div>



        </>
    )
}

export default Aboutus;