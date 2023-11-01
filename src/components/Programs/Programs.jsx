import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div className="category" key={program.id}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="Right arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
