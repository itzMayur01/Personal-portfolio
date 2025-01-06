import SkillCard from "./SkillCard";

const Skill = () => {
  const skillItem = [
    {
      imgSrc: "/images/html5.svg",
      label: "HTML5",
      desc: "Markup Language",
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS3",
      desc: "Styling",
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },

    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: "UI Library",
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "Tailwind CSS",
      desc: "CSS Framework",
    },
    {
      imgSrc: "/images/redux.svg",
      label: "Redux",
      desc: "State Management",
    },

    {
      imgSrc: "/images/git.svg",
      label: "Git",
      desc: "Version Control",
    },
    {
      imgSrc: "/images/vscode.svg",
      label: "VS Code",
      desc: "Code Editor",
    },

    {
      imgSrc: "/images/figma.svg",
      label: "Figma",
      desc: "Design Tool",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
