"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (

    <>
      <div className="ourClients-heading">
        <h1>// Our Clients Our <span className="green"> Belivers </span></h1>
      </div>
    <div className="main-content">

    
      
      {/* Left Side - Image Section */}
      <div className="relative h-80 w-full ">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom rounded-3xl our-client-images">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Right Side - Content Section */}
      <div className="left-side-test-content">
        <motion.div
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <h3 className="text-2xl font-bold  text-white">
            {testimonials[active].name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {testimonials[active].designation}
          </p>

          <motion.p className="text-lg text-white mt-8 ">
            {testimonials[active].quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 left-right-buttons-clients pt-12 md:pt-0">
          <button
            onClick={handlePrev}
            className="h-7 w-7 rounded-full  flex items-center justify-center group/button"
          >
            <FaArrowLeft className="h-5 w-5 text-green-400 group-hover/button:rotate-12 transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="h-7 w-7 rounded-full  flex items-center justify-center group/button"
          >
            <FaArrowRight className="h-5 w-5 text-green-400 group-hover/button:-rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
