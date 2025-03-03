"use client";
import { cn } from "../lib/util";
import React, { createContext, useState, useRef } from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  borderColor = "#1D6F40", 
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [borderStyle, setBorderStyle] = useState({
    border: "2px solid transparent",
    borderRadius: "20px", 
  });
  const [cursorPosition, setCursorPosition] = useState(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setCursorPosition({ x, y });

    let newBorderStyle = {
      border: "2px solid transparent",
      borderRadius: "20px", 
    };

    if (y < height / 4) newBorderStyle.borderTop = `3px solid ${borderColor}`;
    if (y > (3 * height) / 4) newBorderStyle.borderBottom = `3px solid ${borderColor}`;
    if (x < width / 4) newBorderStyle.borderLeft = `3px solid ${borderColor}`;
    if (x > (3 * width) / 4) newBorderStyle.borderRight = `3px solid ${borderColor}`;

    setBorderStyle(newBorderStyle);

    const rotateX = (y - height / 2) / 100;
    const rotateY = (x - width / 2) / 200;
    containerRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    setCursorPosition(null);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
    setBorderStyle({
      border: "2px solid transparent",
      borderRadius: "20px", 
    });
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-20 movingcarda-background-color items-center justify-center relative", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            " relative transition-all duration-200 ease-linear overflow-hidden",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            position: "relative",
            ...borderStyle,
          }}
        >
          {children}

    

          {cursorPosition && (
            <div
              className="absolute rounded-full"
              style={{
                width: "180px",
                height: "180px",
                background: borderColor,
                top: cursorPosition.y - 40,
                left: cursorPosition.x - 40,
                pointerEvents: "none",
                transition: "opacity 0.1s ease",
                opacity: isMouseEntered ? 1 : 0,
                filter: "blur(100px)",
              }}
            />
          )}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};
