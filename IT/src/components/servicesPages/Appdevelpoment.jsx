import mobImg from "../../services_img/02.png"
import { useNavigate } from "react-router-dom";
function AppDevelopment() {

    const nevigate = useNavigate();

    const handlenevigate = (path) =>{
   
        nevigate(path)


    }

    
    return (
        <>
            <div className="full-height">
                <div className="main-servive-div">

                    <div className="sidepages">
                        <h1> Our Category</h1>
                        <hr></hr>

                        <div className="first-container ">

                            <button className="btn-page" onClick={()=>handlenevigate("/Websitedev")}>WebSite development</button>

                        </div>

                        <div className="first-container ">

                            <button className="btn-page" onClick={()=>handlenevigate("/digitalmarkting")} >Digital Marketing</button>

                        </div>

                        <div className="first-container bg-green-500 ">

                            <button className="btn-page" onClick={()=> handlenevigate("/appdevelopment")}>App Development</button>

                        </div>

                        <div className="first-container">

                            <button className="btn-page" >UI development</button>

                        </div>

                        <div className="first-container">

                            <button className="btn-page">AI integration</button>

                        </div>

                        <div className="first-container">

                            <button className="btn-page">Softwere Development</button>

                        </div>

                    </div>

                    <div className="main-content-service-page">
                        <div className="image-service-page">
                            <img src={mobImg} />


                        </div>
                        <hr></hr>

                        <div className="content-service-pages">
                            <div className="heading-services">
                                <h1>// Mobile App Development Services</h1>
                            </div>

                            <div className="para-services">

                                <p>At NAMO AI WEBTECH, we specialize in crafting innovative, high-performance mobile applications that enhance user engagement and drive business success. Whether you need a custom mobile app, an enterprise solution, or a cross-platform application, our expert team is here to bring your vision to life.</p>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="our-development-services">

                    <div className="need-service">
                        <div className="need-service-heading">
                            <h1>Need service</h1>
                        </div>

                        <div className="button-service">
                            <button className="btn-contact">Contact us</button>
                        </div>


                    </div>
                    <div className="our-development-main">

                        <div className="our-development-main-service">
                            <div className="first-img">
                                <h4> iOS App Development</h4>
                            </div>

                            <div className="first-img">
                                <h4>Android App Development</h4>
                            </div>

                            <div className="first-img">
                                <h4>Cross-Platform Development</h4>
                            </div>

                            <div className="first-img">
                                <h4>Progressive Web Apps (PWA)</h4>
                            </div>

                            <div className="first-img">
                                <h4>UI/UX Design</h4>
                            </div>

                            <div className="first-img">
                                <h4>App Maintenance & Support </h4>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="testomonials">

                </div>
            </div>
        </>
    )
}

export default AppDevelopment;