"use client";
import { cn } from "../../lib/util";
import { FaStar } from "react-icons/fa";

import poster_img from "../../Images/poster-portfoliyo.jpg";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
      <div className={cn("flex", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div className={cn("w-82 flex flex-col items-center", className)}>
      {children}
    </div>
  );
};

export default function Page() {
  const cardsData = Array(9).fill({ image: poster_img });

  return (
    <div className="top-main bg-black">
      <div className="main bg-black grid grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div className="sub-portfoliyo-card" key={index}>
            <CardContainer className="card-container">
              <CardBody className="bg-white rounded-xl justify-between">
                <img
                  src={card.image}
                  alt="Portfolio Item"
                  className="w-full h-80 object-cover images-card-portfoliyo"
                />

                {/* Review Section with Stars */}
                <div className="review-btn flex w-80 justify-between items-center ">
                  <div className="review flex items-center gap-1">
                    
                    {[...Array(5)].map((_, i) => (
                      < FaStar  key={i} className="text-green-500  text-l" />
                    ))}
                  </div>

                  <div className="visit-button  text-center p-3 text-lg">
                    <button className="p-4">Visit site</button>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
