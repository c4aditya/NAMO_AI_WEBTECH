import { useState, useEffect } from "react";

function Counter() {
  const [count1, setCount1] = useState(0); 
  const [count2, setCount2] = useState(0); 
  const [count3, setCount3] = useState(0); 
  const [count4, setCount4] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((prev) => (prev < 10 ? prev + 1 : prev));
      setCount2((prev) => (prev < 20 ? prev + 1 : prev));
      setCount3((prev) => (prev < 121 ? prev + 1 : prev));
      setCount4((prev) => (prev < 1 ? prev + 1 : prev));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="main-tursted-section">
    <div className="sub-tursted-section">
    <div className="tursted-section">
        <h1 className="tursted-heading">Trusted by <span className="green"> Industry Leaders</span> .</h1>
        <p className="tursted-para">Empowering Global Brands and Startups to Drive Innovation and Success with our unparalled
        expertise and commitment to excellence.</p>
    </div>

    <div className="patners-images">
      <div className="patners-wrapper">
        <div className="patners">
          <h1>Namo Airways</h1>
        </div>
        <div className="patners">
          <h1>Namo Airways</h1>
        </div>
        <div className="patners">
          <h1>Namo Airways</h1>
        </div>
        <div className="patners">
          <h1>Namo Airways</h1>
        </div>
        <div className="patners">
          <h1>Namo Airways</h1>
        </div>

        <div className="patners">
          <h1>Namo Airways</h1>
        </div>

        <div className="patners">
          <h1>Namo Airways</h1>
        </div>

        <div className="patners">
          <h1>Namo Airways</h1>
        </div>

        <div className="patners">
          <h1>Namo Airways</h1>
        </div>


        <div className="patners">
          <h1>Namo Airways</h1>
        </div>

        <div className="patners">
          <h1>Namo Airways</h1>
        </div>
        
      </div>
    </div>
  

      <div className="top-counter">
        <div className="main-counter">
          <div className="counter-value">
            <h1>{count1} +</h1>
            <p>Projects Completed</p>
          </div>

          <div className="counter-value">
            <h1>{count2} +</h1>
            <p>Clients Served</p>
          </div>

          <div className="counter-value">
            <h1>{count3} +</h1>
            <p>Happy Customers</p>
          </div>

          <div className="counter-value">
            <h1>{count4} +</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Counter;
