import "./Header.css";
import HeaderLogo from "../../assets/images/header_logo.svg";
import { BiSearch } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        <div className="header_left">
          <span className="header_logo">
            <img
              className="header_logo_images"
              src={HeaderLogo}
              alt="header_logo"
            />
          </span>
          <p className="header_line"></p>
          <form className="form">
            <button className="searchBtn">
              <BiSearch />
            </button>
            <input
              className="form_input"
              type="text"
              placeholder="Search"
              required
            />
          </form>
        </div>
        <div className="header_right">
          <ul className="header_item">
            <li className="header_list">
              <a href="/" className="header_link">
                Home
              </a>
            </li>
            <li className="header_list">
              <a href="/" className="header_link">
                Guides
              </a>
            </li>
            <li className="header_list">
              <a href="/" className="header_link">
                About
              </a>
            </li>
            <li className="header_list">
              <a href="/" className="header_link">
                Inspiration
              </a>
            </li>
            <li className="header_list">
              <a href="/" className="header_link">
                Contact
              </a>
            </li>
          </ul>
          <a className="signUpLink" href="/">
            <button className="signUpBtn">Sign Up</button>
          </a>
        </div>
        <SlMenu className="media_menu" />
      </div>
    </div>
  );
};
export default Header;
