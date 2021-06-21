import React, { useState } from "react";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "0px",
        zIndex: "5",
      }}
    >
      <IconContext.Provider value={{ color: "inherit" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FcNext onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle"></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
export default Navbar;
