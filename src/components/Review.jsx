import ReviewCard from "./ReviewCard";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

//register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {
  const reviews = [
    {
      content:
        "Great team player! Worked together on several projects, and their attention to detail and problem-solving skills really stood out. Excited to see where their skills take them in front-end development!",
      name: "Ajay Jangra",
      imgSrc: "/images/ajay.png",
      relationship: "Peer Reviewer",
    },
    {
      content:
        "Great work on the latest project! Always open to suggestions and made improvements quickly. Definitely see potential in their work.",
      name: "Sushank chandel",
      imgSrc: "/images/sushank.png",
      relationship: "Peer Reviewer",
    },
    {
      content:
        "Impressive work on the project! Their UI designs were intuitive and easy to navigate. Always willing to help and collaborate.",
      name: "Rahul Bhatia",
      imgSrc: "/images/rahul.png",
      relationship: "Friend",
    },
    {
      content:
        "Remarkable progress in a short time! Demonstrates strong potential in front-end development and always seeks to improve.",
      name: "Naresh Saharan",
      imgSrc: "/images/naresh.png",
      relationship: "UpGrad SME",
    },
  ];
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "60% 70%",
        end: "200% 100%",
        scrub: true,
      },
      x: "-900",
    });
  });
  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          What People Say About My Projects
        </h2>
        <div className=" scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, relationship }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              relationship={relationship}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Review;
