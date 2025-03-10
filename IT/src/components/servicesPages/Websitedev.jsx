import websiteImg from "../../services_img/01.png"

function Websitedev(){
    return(
        <>
        <div className="full-height">
        <div className="main-servive-div">

            <div className="sidepages">
                <h1> Our Category</h1>
                <hr></hr>

                <div className="first-container bg-green-500">

                    <button className="btn-page ">WebSite development</button>

                </div>

                <div className="first-container">

                <button className="btn-page">Digital Marketing</button>
                    
                </div>

                <div className="first-container">

                <button className="btn-page">App Development</button>
                    
                </div>

                <div className="first-container">

                <button className="btn-page">UI development</button>
                    
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
                    <img src={ websiteImg}/>


                </div> 
                <hr></hr>

                <div className="content-service-pages">
                    <div className="heading-services">
                        <h1>// Website Development Services</h1>
                    </div>

                    <div className="para-services">
                        <p>Welcome to NAMO AI WEBTECH! We specialize in designing and developing cutting-edge websites that enhance your online presence. Whether you need a business website, eCommerce store, or custom web solution, our expert team ensures seamless performance, user-friendly interfaces, and top-tier security.</p>

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
                    <h4>Custome Webdesign</h4>
                </div>

                <div className="first-img">
                    <h4>Responsive Design</h4>
                </div>

                <div className="first-img">
                    <h4>eCommerece Soluction</h4>
                </div>

                <div className="first-img">
                    <h4>Maintain And support</h4>
                </div>

                <div className="first-img">
                    <h4>CMS development</h4>
                </div>

                <div className="first-img">
                    <h4>CMS development</h4>
                   
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

export default Websitedev