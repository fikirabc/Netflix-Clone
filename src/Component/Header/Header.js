import React from "react";
import "./Header.css";
import NetflixLogo from "../../asset/image/NetflixLogo.png"
export const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img className="logoimage" src={NetflixLogo} alt="Netflix Logo" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* <li><SearchIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li><AccountBoxIcon /></li>
              <li><ArrowDropDownIcon /></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
