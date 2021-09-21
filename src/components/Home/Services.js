import business from "../../images/Business.png"
import tech from "../../images/Tech.png"
import finance from "../../images/Finance.png"
import data from "../../images/Data.png"

export function Services() {
  return (
    <div id="Services" className="block">
      <div className="titleLine">
      <div>
      <hr></hr>
      </div>
      <h1 className ="titles">Services <span className="pinkBoldItalic"> Areas of Expertise</span></h1>
      <div>
      <hr></hr>
      </div>
      </div>
      <div>
        <p className="text">
          WDgit is leading the way as a strategic partner, providing solutions
          with direct impact on our clients’ businesses.
        </p>
        <div className="noShow" >
          <img src={business} />
          <a href="/WDGIT/#">more information</a>
          <img src={tech} />
          <a href="/WDGIT/#">more information</a>
          <img src={finance} />
          <a href="/WDGIT/#">more information</a>
          <img src={data} />
          <a href="/WDGIT/#">more information</a>
          </div>
        <div className="container">
          <div className="span">
          <img src={business} alt="business"></img>
          <a href="/WDGIT/#" className="grey">more information</a>
          </div>
          <div className="span">
          <img src={finance} alt="finance"></img>
          <a href="/WDGIT/#" className="more">more information</a>
          </div>
          <div className="span">
          <img src={tech} alt="tech"></img>
          <a href="/WDGIT/#" className="more">more information</a>
          </div>
          <div className="span">
          <img src={data} alt="data"></img>
          <a href="/WDGIT/#" className="more">more information</a>
          </div>
        </div>
      </div>
    </div>
  );
}
