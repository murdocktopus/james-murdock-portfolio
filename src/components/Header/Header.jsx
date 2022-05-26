import "./Header.scss";
import { Link, Route, Redirect } from "react-router-dom";
import { CgMenu, CgSearch } from "react-icons/cg";

function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__nav-link">
            <p className="logo">JMDb</p>
          </Link>

          <div className="header__nav-container">
            <CgMenu className="icon" />
            <p className="header__nav-text">Menu</p>
          </div>

          <form
            action=""
            className="search-form"
            // onSubmit={props.handleSubmit}
          >
            <input
              type="search"
              className="search-form__input"
              placeholder="Search JMDb..."
              name="search"
              id="site-search"
              autoComplete="off"
            />
            <button type="submit" value="submit" hidden></button>
          </form>

          <Link to="/" className="header__nav-link">
            <p className="header__nav-text">PORTFOLIO</p>
          </Link>

          <Link to="/" className="header__nav-link">
            <p className="header__nav-text">BLOG</p>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
