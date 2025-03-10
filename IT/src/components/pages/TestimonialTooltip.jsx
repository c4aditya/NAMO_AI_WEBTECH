"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const TestimonialTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const people = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image:
      "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
    },
    {
      id: 2,
      name: "CSS",
      designation: "",
      image:
        "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.codehelp.in%2Fassets%2FHome%2Fcss.svg&w=640&q=75",
    },
    {
      id: 3,
      name: "java script",
      designation: "",
      image:
        "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.codehelp.in%2Fassets%2FHome%2Fjs.svg&w=640&q=75",
    },
    {
      id: 4,
      name: "Reactjs",
      designation: "",
      image:
        "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.codehelp.in%2Fassets%2FHome%2Freact.svg&w=640&q=75",
    },
    {
      id: 5,
      name: "Angular",
      designation: "",
      image:
        "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.codehelp.in%2Fassets%2FHome%2Fangular.svg&w=640&q=75",
    },
    {
      id: 6,
      name: "viuejs",
      designation: "",
      image:
        "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.codehelp.in%2Fassets%2FHome%2Fvue.svg&w=640&q=75",
    },
    {
      id: 7,
      name: "React native ",
      designation: "",
      image:
        "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.codehelp.in%2Fassets%2FHome%2Freact.svg&w=640&q=75",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center w-full gap-10">
      {people.map((testimonial) => (
        <div
          className="-mr-4 relative group"
          key={testimonial.id}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-xl   text-white relative z-30 ">
                  {testimonial.name}
                </div>
                <div className="text-white text-xs">
                  {testimonial.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img 
            onMouseMove={handleMouseMove}
            src={testimonial.image}
            alt={testimonial.name}
            className="object-cover m-0 p-0 object-top rounded-full h-18 w-18  group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialTooltip;
