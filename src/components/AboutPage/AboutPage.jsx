import React, { useRef, useEffect, useContext } from "react";
import AppContext from "../../AppContext";
import "./AboutPage.css";

const skillsList = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "React Storybook",
  "HTML5/CSS3",
  "Sass/SCSS",
  "Styled Components",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Material-UI",
  "Mobile Responsive Design",
  "SVG Illustration",
  "GraphQL",
  "Gatsby/Next.js",
  "PostgreSQL",
  "API Design",
  "Unit Testing",
  "Continuous Integration",
  "Web Accessibility",
  "Git Workflow",
  "Software System Design",
];

const AboutPage = () => {
  const { setOffsetTop } = useContext(AppContext);
  const ref = useRef();

  useEffect(() => {
    const getElementOffsetTop = () => {
      if (ref.current) {
        setOffsetTop("about", ref.current.offsetTop);
      }
    };
    getElementOffsetTop();
    window.addEventListener("resize", getElementOffsetTop);
    return () => {
      window.removeEventListener("resize", getElementOffsetTop);
    };
  }, [setOffsetTop]);

  return (
    <section className="about-container flex-container--centered" ref={ref}>
      <article>
        <div className="about-container__upper flex-container--centered">
          <div className="about-container__upper-half about-container__upper--left flex-container--centered">
            Hi
          </div>
          <div className="about-container__upper-half about-container__upper--right flex-container--centered">
            <p>
              Thank you for visiting. I&apos;m Kevin, I make web apps, websites,
              &amp; user interfaces.
            </p>
          </div>
        </div>
        <div className="about-container__lower">
          <p>
            Coding is my trade and vehicle for life-long learning. &nbsp;As a
            programmer, I aim for clean, efficient, maintainable code. As a web
            developer, I aim to deliver inviting and intuitive virtual spaces
            with user-friendly applications.
          </p>
          <p>
            My background is in cultural anthropology. I am an artist,
            innovator, creative thinker, and problem solver. Much of my passion
            for programming comes from my interest in the intersection of art
            and technology.
          </p>
          <p>My toolkit includes:</p>
          <ul className="skills-list ul-reset">
            {skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
