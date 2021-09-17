import business from "../images/Business.png"
import tech from "../images/Tech.png"
import finance from "../images/Finance.png"
import data from "../images/Data.png"

export function Services() {
  return (
    <div className="block">
      <h1 className ="grey">Services <span className="pink"> Areas of Expertise</span></h1>
      <div>
        <p className="text">
          WDgit is leading the way as a strategic partner, providing solutions
          with direct impact on our clients’ businesses.
        </p>
        <div className="container">
          <div className="span">
          <img src={business} alt="business"></img>
          <a href="/#" className="grey">more information</a>
          </div>
          <div className="span">
          <img src={finance} alt="finance"></img>
          <a href="/#" className="grey">more information</a>
          </div>
          <div className="span">
          <img src={tech} alt="tech"></img>
          <a href="/#" className="grey">more information</a>
          </div>
          <div className="span">
          <img src={data} alt="data"></img>
          <a href="/#" className="grey">more information</a>
          </div>
        </div>
      </div>
    </div>
  );
}
