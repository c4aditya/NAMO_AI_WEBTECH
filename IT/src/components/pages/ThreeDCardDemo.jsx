"use client";
import { cn } from "../../lib/util";
import poster_img from "../../Images/poster-portfoliyo.jpg"
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
      <div
        className={cn("flex ", containerClassName)}
        style={{ perspective: "1000px" }}
      >
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
    <div className={cn(" w-82 flex flex-col items-center ", className)}>
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const { isMouseEntered } = useContext(MouseEnterContext);

  const handleAnimations = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = isMouseEntered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  useEffect(() => {
    handleAnimations();
  }, [handleAnimations]);

  return (
    <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
};

export default function Page() {
  const cardsData = [
    {
      id: 1,
      image: poster_img,
    
     
    },
    {
      id: 2,
      image: poster_img,
    
    
    },
    {
      id: 3,
      image: poster_img,
     
     
    },
    {
      id: 4,
      image: poster_img,
     
    
    },

    {
      id: 5,
      image: poster_img,
     
    
    },

    {
      id: 6,
      image: poster_img,
     
    
    },

    {
      id: 7,
      image: poster_img,
     
    
    },

    {
      id: 8,
      image: poster_img,
     
    
    },

    {
      id: 9,
      image: poster_img,
     
    
    },
  ];

  return (
    <>
    <div className="top-main bg-black">
      <div className="main bg-black grid grid-cols-3 gap-6  ">
        {cardsData.map((card) => (
          <div className="sub-portfoliyo-card" key={card.id}>
            <CardContainer ClassName="card-container">
              <CardBody className="bg-white justify-between">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-80 object-cover"
                />
                 <div className="revie-btn mt-8 flex w-80  border-2 border-red-500  justify-between">
                <div className="review">
                  <p>Review</p>

                </div>

                <div className="visit-button border-2 border-red-500 w-30 text-center p-3">
                  <button > Visit site </button>
                </div>
              </div>
              </CardBody>
             
            </CardContainer>

          </div>
        ))}
      </div>
      </div>
    </>
  );
}
