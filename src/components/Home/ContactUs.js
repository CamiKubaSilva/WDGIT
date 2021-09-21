export function ContactUs() {
  return (
    <div id="Contact" className="block">
      <div className="titleLine">
      <div>
      <hr></hr>
      </div>
      <h1 className="titles">Contact <span className="pinkBoldItalic">Us</span></h1>
      <div>
      <hr></hr>
      </div>
      </div>
      <form className="form">
        <div className="inputCont">
        <div className="inputContainer">
        <label>name</label>
        <input />
        </div>
        <div className="inputContainer">
        <label>email</label>
        <input />
        </div>
        <div className="inputContainer">
        <label>message</label>
        <textarea />
        </div>
        </div>
        <div className="inputCont">
        <div className="inputContainer">
        <label>country</label>
        <input />
        </div>
        <div className="inputContainer">
        <label>tel.</label>
        <input />
        </div>
        <button>send</button>
        </div>
      </form>
    </div>
  );
}
