import "./Header.scss";
import { Link, Route, Redirect } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__nav-link">
            <p className="logo">JMDb.me</p>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
