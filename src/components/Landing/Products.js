import bynImage from "../../images/bynImage.png";
import tarjetas from "../../images/tarjetas.png";
import entry from "../../images/entry.png";

export function Products() {
  return (
    <div className="blockPL">
      <h1 className="obtene">Obtené beneficios más rápido</h1>
      <img className="byn" src={bynImage} alt="bynImage"></img>
      <img className="byn" src={entry} alt="rewards"></img>
      <div className="allCards">
        <img src={tarjetas} alt="tarjetas"></img>
        <div className="buttons">
          <button>Get started</button>
          <button>Get started</button>
          <button>Get started</button>
          <button id="unite">Get started</button>
        </div>
      </div>
      <div className="unite">
        <h1>Unite a nuestra familia</h1>
        <h2>accedé a una tarjeta global</h2>
        <hr id="giveback"></hr>
        <a href="/tarjetas/#">Acerca de nosotros</a>
      </div>
    </div>
  );
}
