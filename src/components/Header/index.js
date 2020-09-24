import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header>
      <div  className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Employee Directory</h1>
          <p className="lead text-center">This application allows the user to search employees</p>
          <div className="text-center">
            <a href="https://github.com/jzura" target="/blank">
              <FontAwesomeIcon icon={faGithub} size="4x" style={{color: "white"}}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;