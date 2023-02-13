import './Header.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import { CgMenu, CgSearch, CgProfile } from 'react-icons/cg';
import { FaLaptopCode, FaBlog, FaSearch } from 'react-icons/fa';
import MenuModal from '../MenuModal/MenuModal';

function Header(props) {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link to='/' className='header__nav-link header__nav-link--logo'>
            <p className='logo'>JMDb</p>
          </Link>

          <div className='header__nav-container' onClick={props.onMenuBtnClick}>
            <CgMenu className='header-icon' />
            <p className='header__nav-text'>Menu</p>
          </div>

          <form
            action=''
            className='search-form'
            // onSubmit={props.handleSubmit}
          >
            <input
              type='search'
              className='search-form__input'
              placeholder='Search JMDb...'
              name='search'
              id='site-search'
              autoComplete='off'
            />
            <button type='submit' value='submit' hidden></button>
          </form>

          <div className='header__block'></div>

          <Link to='/' className='header__nav-link header__nav-link--search'>
            <FaSearch className='header-icon header-icon--hidden' />
          </Link>

          <Link
            to='/portfolio'
            className='header__nav-link header__nav-link--portfolio'
          >
            <p className='header__nav-text'>PORTFOLIO</p>
            <FaLaptopCode className='header-icon header-icon--hidden' />
          </Link>

          <Link to='/blog' className='header__nav-link header__nav-link--blog'>
            <p className='header__nav-text'>BLOG</p>
            <FaBlog className='header-icon header-icon--hidden' />
          </Link>
        </div>
      </header>
      {/* <MenuModal />4 */}
    </>
  );
}
export default Header;
