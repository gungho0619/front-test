import { Link } from "react-router-dom";
import "./index.css";
import { ArrowDropDown } from "@mui/icons-material";

const Header = () => {
  return (
    <div
      className="header-grid"
      style={{
        background:
          location.pathname === "/plant1" || location.pathname === "/garden-map"
            ? "white"
            : "",
        position: location.pathname === "/garden-map" ? "" : "fixed",
      }}
    >
      <div className="header-item">
        <img className="header-logo" src="/src/assets/img/Logo.png" alt="" />
      </div>
      <div className="header-item">
        <div className="navbar">
          <Link
            to="/plant"
            className="nav-item"
            style={{
              color:
                location.pathname === "/plant1" ||
                location.pathname === "/garden-map"
                  ? "black"
                  : "white",
            }}
          >
            Home
          </Link>
          <Link
            to="/plant1"
            className="nav-item"
            style={{
              color:
                location.pathname === "/plant1" ||
                location.pathname === "/garden-map"
                  ? "black"
                  : "white",
            }}
          >
            About Us
          </Link>
          <Link
            className="nav-item"
            style={{
              color:
                location.pathname === "/plant1" ||
                location.pathname === "/garden-map"
                  ? "black"
                  : "white",
            }}
          >
            <span>
              Pages
            </span>
          </Link>
        </div>
      </div>
      <div className="header-item btn-grid">
        <Link to="/login">
          <input className="header-login" type="button" value="Login" />
        </Link>
        <Link to="/register">
          <input className="header-signup" type="button" value="Sign up" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
