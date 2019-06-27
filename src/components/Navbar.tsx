import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";

const style = {
  link: { color: "#555", textDecoration: "none" },
  navbar: {
    borderBottom: "solid 1px #000",
    padding: "10px 15px"
  }
};
export default class Navbar extends React.Component {
  public render() {
    return (
      <div style={style.navbar}>
        <Link to="/app/newsfeed">
          <FontAwesomeIcon icon={faNewspaper} />
          Instacool
        </Link>
        <div style={{ float: "right" }}>
          <Link style={style.link} to="/app/profile">
            <FontAwesomeIcon icon={faUser} /> Perfil
          </Link>
        </div>
      </div>
    );
  }
}
