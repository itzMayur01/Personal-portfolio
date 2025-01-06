import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/images/project-1.jpg",
      title: "SmartTalk - AI ",
      tags: ["react", "javascript", "tailwindCSS", "lenis", "gsap"],
      projectLink: "https://smart-talk-ai.vercel.app/",
    },
    {
      imgSrc: "/images/project-2.jpg",
      title: "PixelFlow - Free stock photo app",
      tags: ["html", "CSS", "Javascript"],
      projectLink: "https://pixel-flow-one.vercel.app/",
    },
    {
      imgSrc: "/images/project-3.jpg",
      title: "Glamora - eCommerce website",
      tags: ["react", "javascript", "css", "html5"],
      projectLink: "#",
    },
    {
      imgSrc: "/images/project-4.jpg",
      title: "Amazon clone",
      tags: ["Web-design", "css", "html5"],
      projectLink: "https://amazon-clone-murex-theta.vercel.app/",
    },
    {
      imgSrc: "/images/project-5.jpg",
      title: "Currency converter",
      tags: ["javascript", "css", "html5"],
      projectLink: "https://currancy-converter.vercel.app/",
    },
    {
      imgSrc: "/images/project-6.jpg",
      title: "Mayur kumar - Personal portfolio",
      tags: ["react", "js", "tailwindCSS", "html", "lenis", "gsap"],
      projectLink: "https://mayurkumar.vercel.app/",
    },
  ];
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
