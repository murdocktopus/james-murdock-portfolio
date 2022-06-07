import "./Footer.scss";
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer">
      <GrFacebook className="icon" />
      <GrInstagram className="icon" />
      <GrTwitter className="icon" />
      <GrYoutube className="icon" />
      <p className="footer__text">&copy; 2022 by JMDb.me</p>
    </footer>
  );
}
export default Footer;
