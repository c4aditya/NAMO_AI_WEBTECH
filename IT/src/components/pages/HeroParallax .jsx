"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lottie from "lottie-react";
import potfolitoanimaton from "../../animations/poerfoliyo-animation.json"
import portfoliyoimg  from "../../Images/portfoliyo-poster.jpg"

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <>
    <div className="width-our-portfolio">
    <div className="our-portfoliyo-top">
      <div className="content-our-portfolio">
        <h1>Our <span className="green">Portfoliyo</span> </h1>
        <p>NAMO AI WEBTECH India is digital Marketing Company offers services like Web design,development, Mobile App development,Digital Marketing.</p>
      </div>

      <div className="image-our-portfolio">
        <Lottie animationData={potfolitoanimaton }></Lottie>
       
      </div>
    </div>
    
    <div ref={ref} className="main-cards-portfoliyo h-[350vh]  py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] " >
      
    <Header/>
      
      <motion.div  style={{  rotateX, rotateZ,  translateY,   opacity,  }} >
        <motion.div className="our-ptoject-cards-first">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="our-ptoject-cards-second">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="our-ptoject-cards-third">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
    </div>
    </>
  );
};

export const Header = () => {
  return (
    <div className="our-product-heading-text">
      <h1>
        LATEST <sapn className="green">PORTFOLIO</sapn> 
      </h1>
      <p >
      Namo AI Webtech is based in Noida, Best Web Designing Company In Delhi, Best SEO Company In Noida. Namo Ai webtech, is a Leading custom web design company based in Noida, India. We create custom design websites, responsive website, dynamic website, seo, smo, ppc, online portals, graphics and hosting server that meet your requirements and fit your budget.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <>
      
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product h-96 w-[30rem] relative flex-shrink-0"
      >
        <a href={product.link} className="block group-hover/product:shadow-2xl">
          <img
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        </a>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    </>
  );
};
