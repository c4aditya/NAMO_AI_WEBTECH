"use client"; 
import {AnimatedTestimonials} from "./AnimatedTestimonials";
import client1 from "../Images/test1.jpg";
import client2 from "../Images/test2.jpg";
import client3 from "../Images/test3.jpg";
import client4 from  "../Images/test4.jpg";
const OurClient = () => {
  const testimonials = [
    {
      id:1,
      image:client1,
      name: "John Doe",
      designation: "CEO, Apple",
      quote: "Their web development services are outstanding! They've helped streamline our workflow with exceptional attention to detail. The team is highly skilled, delivering high-quality and efficient solutions. We are truly impressed with their work and commitment to excellence."
    },
    {   id:2,
        image:client2,
      name: "Jane Smith",
      designation: "Marketing Head, ABC Corp",
      quote: "I absolutely love the marketing strategies they've implemented! The team has done a fantastic job in creating campaigns that truly resonate with our audience. Their creativity and expertise have helped us connect with customers more effectively. "
    },
    {   id:3,
        image:client3,
        name: "Jane Smith",
        designation: "Amazone",
        quote: "The mobile app they developed for us is outstanding! The user experience is smooth and intuitive, and the app runs flawlessly on all devices. Their team paid attention to every detail, ensuring that the app is both functional and visually appealing."


      },
      {id:4,
        image:client4,
        name: "Jane Smith",
        designation: "asdjasdkjha",
        quote: "Their UX/UI design service has completely transformed our product. The interface is visually stunning, and the user experience is seamless, making navigation intuitive for our users. They took the time to understand our needs and tailored the design to match our brand’s identity."
      }
  ];

  return (
    <section className="py-20 our-clients">
       <div className="main-our-client">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default OurClient;
