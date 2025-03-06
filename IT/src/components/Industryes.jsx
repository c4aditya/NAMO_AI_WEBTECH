import { CardContainer } from "./CardContainer";
import customerImg from "../Images/left-icon.png"

// import customer logo
import firstimage from "../OurCustomerslogo/01.jpeg"
import secongimg from "../OurCustomerslogo/02.jpeg"
import thirdimg from "../OurCustomerslogo/03.jpeg"
import fourthimg from "../OurCustomerslogo/04.jpeg"
import fifthimg from "../OurCustomerslogo/05.jpeg"
function Industryes(){
    return(
        <>
        <div className="movingcarda-background-color">
 
        <div className="main-class-our-industryes">
        <CardContainer>
   
                     <h1 className="mh">// Industries Were we are <span className="green"> work with </span></h1>
              
           <div className="main-our-industary">
            
             <div className="content-our-industryes">
                
                <div className="para-industryes">
                  <p>We are a dynamic IT company providing a comprehensive range of business services designed to meet the evolving demands of modern enterprises. From innovative web development and strategic digital marketing to advanced branding, SEO, and lead generation techniques, we empower businesses to succeed in today’s competitive landscape. Our solutions cater to diverse industries, ensuring tailored and impactful results. With a commitment to innovation and quality, we help our clients strengthen their online presence, drive sustainable growth, and achieve their business objectives.</p>
                </div>

                <div className="btn-industry">
                    <button className="btn-indus">Start Project</button>
                </div>

             </div>
           
             <div className="images-our-industryes">

               <div className="image-text-industryes">
                   
                <img  src="https://www.shadowinfosystem.com/static/media/medical-check.9a0952677d2c9acee69e.png">
                </img>

                <p>Health Care</p>
               </div>


               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/journalism.53d1c75438781ccc47f5.png">
                </img>

                <p>News Lines</p>
               </div>



               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/airplane.082f7574dfede18d905c.png">
                </img>

                <p>Travel</p>
               </div>



               <div className="image-text-industryes">
                <img src="data:image/png;base64,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">
                </img>

                <p>Education</p>
               </div>



               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/factory.f7f187e7349b199f2224.png">
                </img>

                <p>Manufacturing</p>
               </div>



               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/house.b9e23f8107d3598c212e.png">
                </img>

                <p>Home Services </p>
               </div>



               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/popcorn.c39523cb17aab9f1e285.png">
                </img>

                <p>Enterment</p>
               </div>



               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/asset-management.c355cc807bdcc9853562.png">
                </img>

                <p>Financeal</p>
               </div>


               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/medical-check.9a0952677d2c9acee69e.png">
                </img>

                <p>Health Care</p>
               </div>

               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/popcorn.c39523cb17aab9f1e285.png">
                </img>

                <p>Enterment</p>
               </div>


               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/factory.f7f187e7349b199f2224.png">
                </img>

                <p>Manufacturing</p>
               </div>


               <div className="image-text-industryes">
                <img src="https://www.shadowinfosystem.com/static/media/journalism.53d1c75438781ccc47f5.png">
                </img>

                <p>News Lines</p>
               </div>
   
             </div>

             </div>
             </CardContainer>  
        </div>    
          


        {/* <div className="our-customers">
            <div className="about-section-to">
                
                
            <div className="content-about-section">
                <h1> // Our Customers </h1>
                </div>
                 
                </div>
              

               
          
            <div className="our-custorme-heading">
                <h1 className="mh">Loved by 200+ customer in <span className="green" >India </span></h1>

            </div>

            <div className="our-custromes-images">
                <div className="content-width">
                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>
                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>


                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>

                <div className="images-with-link">
                    <a href="https://google.com">
                        <img src="https://www.shadowinfosystem.com/static/media/gctc.1393918868943f174a53.jpg"></img>
                    </a>
                    <p>Gotab</p>
                </div>
                </div>

                
            </div>

        </div> */}

        {/*  our customer start here  */}

        <section>
            <div className="top-our-customer">

                <div className="heading-para-our-customer">
                    <div className="our-customer-heading">
                        <h1> // Our <span className="green">customer</span> </h1>
                    </div>

                    <div className="our-customer-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, at.</p>
                    </div>

                    
                </div>

                <div className="left-img-content-right-img">
                <div className="left-image-customer">
                        <img src={customerImg}/>
                    </div>

                    <div className="customer-logos">
                        <div className="row-logos first">
                            <div className="frist-img">
                              <img src={secongimg} />
                            </div>

                            <div className="frist-img">
                              <img src={fifthimg}/>
                            </div>

                            <div className="frist-img">
                             <img src={secongimg}/>
                            </div>

                            <div className="frist-img">
                              <img src={thirdimg}/>
                            </div>
                        </div>

                        <div className="row-logos second">
                            <div className="frist-img">
                              <img src={fourthimg}/>
                            </div>

                            <div className="frist-img">
                              <img src={fifthimg}/>
                            </div>

                            <div className="frist-img">
                              <img src={firstimage}/>
                            </div>

                            <div className="frist-img">
                              <img src={thirdimg}/>
                            </div>
                        </div>


                        <div className="row-logos third">
                            <div className="frist-img">
                              <img src={firstimage}/>
                            </div>

                            <div className="frist-img">
                              <img src={secongimg}/>
                            </div>

                            <div className="frist-img">
                              <img src={thirdimg}/>
                            </div>

                            <div className="frist-img">
                              <img src={fourthimg}/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="right-image-customer">
                        <img src={customerImg}/>
                    </div>

                </div>

            </div>

       </section>
        </div>
        </>
    )
}

export default Industryes;