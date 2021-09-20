import summary from "../../images/summary.jpg";

export function Summary() {
  return (
    <div className="block">
      <img className="bannerSum" src={summary} alt="office" />
      <div className="summary">
        <h1 className="grey">
          <span className="pink">Strategic Consulting</span>, leveraging
          Technology Solutions based on Data Science and Artifcial Intelligence.
          </h1>
          <h1>
          We help our clients identify emerging opportunities, finding
          unexpected value and creating new business seizing the
          <span className="pink"> power of digital.</span>
          </h1>
          <h1>
          We join our clients throughout their journey
          <span className="pink"> transforming their business</span>, from
          strategy to execution, implementation and calibration.
        </h1>
      </div>
    </div>
  );
}
