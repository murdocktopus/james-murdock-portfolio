import "./Hero.scss";
import { FiAward } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-main">
        <div className="hero-main__overlay">
          <div className="hero-main__img2"></div>
          <FiAward className="icon icon--hero-main" />
          <div className="hero-main__text-container">
            <p className="hero-main__title">Top 10: Favourite Movies</p>
            <p className="hero-main__subtitle">Top 10: Favourite Movies</p>
          </div>
        </div>
      </div>

      <div className="hero__secondary">
        {/* <p className="hero__text">copyright website</p> */}
      </div>

      <div className="hero__secondary">
        {/* <p className="hero__text">copyright website</p> */}
      </div>

      <div className="hero__secondary">
        {/* <p className="hero__text">copyright website</p> */}
      </div>
    </section>
  );
}
export default Hero;
