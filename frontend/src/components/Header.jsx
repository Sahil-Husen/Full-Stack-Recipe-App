 
import PopUp from "./PopUp";

function Header({handlePopUp}) {
 

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">Logo</div>
          <div className="">
            <input
              className="search"
              type="text"
              placeholder="Search Recepe ...."
            />
          </div>
          <div className="items">
            <li>Home</li>
            <li>Recepes</li>
            <button onClick={()=>handlePopUp()}  style={{ padding: "4px" }}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
