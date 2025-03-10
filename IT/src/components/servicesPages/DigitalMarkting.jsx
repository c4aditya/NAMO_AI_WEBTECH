import digiImg from "../../services_img/03.png"
function Digitalmarkting(){
    return(
      <>
             <div className="full-height">
             <div className="main-servive-div">
     
                 <div className="sidepages">
                     <h1> Our Category</h1>
                     <hr></hr>
     
                     <div className="first-container ">
     
                         <button className="btn-page " onClick={()=>servivedetails}    >WebSite development</button>
     
                     </div>
     
                     <div className="first-container bg-green-500">
     
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
                         <img src={ digiImg}/>
     
     
                     </div> 
                     <hr></hr>
     
                     <div className="content-service-pages">
                         <div className="heading-services">
                             <h1>// Digital Marketing Services</h1>
                         </div>
     
                         <div className="para-services">
                             <p>At NAMO AI WEBTECH, we provide cutting-edge digital marketing solutions to help businesses grow their online visibility, attract more customers, and increase conversions. Our team of experts crafts data-driven strategies tailored to your brand’s needs</p>
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
                         <h4>Search Engine Optimization (SEO)</h4>
                     </div>
     
                     <div className="first-img">
                         <h4> Social Media Marketing (SMM)</h4>
                     </div>
     
                     <div className="first-img">
                         <h4> Content Marketing</h4>
                     </div>
     
                     <div className="first-img">
                         <h4>Email Marketing</h4>
                     </div>
     
                     <div className="first-img">
                         <h4>Conversion Rate Optimization (CRO)</h4>
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
export default Digitalmarkting;