import girl from "../../images/girl1.png";
import card from "../../images/tarjeta.png";

export function Products() {
  return (
    <div id="Products" className="block">
      <div className="titleLine">
      <div>
      <hr></hr>
      </div>
      <h1 className="titles">
        WDgit <span className="pinkBoldItalic">Products </span>
      </h1>
      <div>
      <hr></hr>
      </div>
      </div>
      <div className="blockBottomH">
        <p className="text">
          Prepaid card, make purchases, pay bills, or get cash from ATMs. Saved
          coins and get access to lot of benefits
        </p>
        <div className="more">
          <div className="cardImg">
            <img className="img1" src={girl} alt="card" />
            <img className="card" src={card} alt="card" />
          </div>
          <div className="moreInfo">
          <a className="aMore" href="/tarjetas"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
