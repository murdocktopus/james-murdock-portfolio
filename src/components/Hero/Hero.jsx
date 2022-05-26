import "./Hero.scss";
import { FiAward } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import highlightImg from "../../assets/images/Forrest_Gump_poster.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-card__overlay">
          <div className="hero-card__img2"></div>
          <FiAward className="icon icon--hero-card" />
          <div className="hero-card__text-container">
            <p className="hero-card__title">
              Top 10: My Favourite Movies of All Time
            </p>
            <p className="hero-card__subtitle">
              It's based on something, I'm sure!
            </p>
          </div>
        </div>
      </div>

      <div className="hero-queue">
        <p className="hero-queue__title">Up next</p>
        <div className="hero-queue__card-container">
          <div className="hero-queue-card">
            <img
              src={highlightImg}
              alt="Queue_Image"
              className="hero-queue-card__img"
            />

            <div className="hero-queue-card__text-container">
              <FiAward className="icon icon--queue-card" />
              <p className="hero-queue-card__title">
                Top 10: My Favourite Movies of All Time
              </p>
              <p className="hero-queue-card__subtitle">
                It's based on something, I'm sure!
              </p>
            </div>
          </div>

          <div className="hero-queue-card">
            <img
              src={highlightImg}
              alt="Queue_Image"
              className="hero-queue-card__img"
            />

            <div className="hero-queue-card__text-container">
              <FiAward className="icon icon--queue-card" />
              <p className="hero-queue-card__title">
                Top 10: My Favourite Movies of All Time
              </p>
              <p className="hero-queue-card__subtitle">
                It's based on something, I'm sure!
              </p>
            </div>
          </div>

          <div className="hero-queue-card">
            <img
              src={highlightImg}
              alt="Queue_Image"
              className="hero-queue-card__img"
            />

            <div className="hero-queue-card__text-container">
              <FiAward className="icon icon--queue-card" />
              <p className="hero-queue-card__title">
                Top 10: My Favourite Movies of All Time
              </p>
              <p className="hero-queue-card__subtitle">
                It's based on something, I'm sure!
              </p>
            </div>
          </div>
        </div>
        <p className="hero-queue-link__text">Browse blog</p>
      </div>
    </section>
  );
}
export default Hero;
