import './Hero.scss';
import { FiAward, FiBook } from 'react-icons/fi';
import { CgSearch, CgChevronRight } from 'react-icons/cg';
import highlightImg from '../../assets/images/Forrest_Gump_poster.jpg';

function Hero(props) {
  // let heroPosts = props.posts.filter((post) => (post.playlists.hero = 4));

  // console.log(`hero posts:`, heroPosts);

  const heroPost1 = props && props.posts[0];
  const heroPost1HeroImg = heroPost1 && heroPost1.imgHero;
  const heroPost1PosterImg = heroPost1 && heroPost1.imgPoster;
  const heroPost1Icon = <FiAward className='hero-card__icon' />;
  // console.log(<FiAward />);

  const heroPost2 = props && props.posts[1];
  const heroPost2HeroImg = heroPost2 && heroPost2.imgHero;
  const heroPost2PosterImg = heroPost2 && heroPost2.imgPoster;

  const heroPost3 = props && props.posts[2];
  const heroPost3HeroImg = heroPost3 && heroPost3.imgHero;
  const heroPost3PosterImg = heroPost3 && heroPost3.imgPoster;

  const heroPost4 = props && props.posts[3];
  const heroPost4HeroImg = heroPost4 && heroPost4.imgHero;
  const heroPost4PosterImg = heroPost4 && heroPost4.imgPoster;

  return (
    <section className='hero'>
      <div
        className='hero-card'
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}${heroPost1HeroImg})`,
        }}
      >
        <div className='hero-card__overlay'>
          <div
            className='hero-card__poster-img'
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}${heroPost1PosterImg})`,
            }}
          ></div>
          <FiAward className='hero-card__icon' />
          <div className='hero-card__text-container'>
            <p className='hero-card__title'>
              {`${heroPost1 && heroPost1.title}: ${
                heroPost1 && heroPost1.subtitle
              }`}
            </p>
            <p className='hero-card__subtitle'>
              {heroPost1 && heroPost1.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className='hero-queue'>
        <p className='hero-queue__title'>Up next</p>
        <div className='hero-queue__card-container'>
          <div className='hero-queue-card'>
            <img
              src={`${process.env.REACT_APP_API_URL}${heroPost2PosterImg}`}
              alt='Queue_Image'
              className='hero-queue-card__img'
            />

            <div className='hero-queue-card__text-container'>
              <FiAward className='icon icon--queue-card' />
              <p className='hero-queue-card__title'>
                {`${heroPost2 && heroPost2.title}: ${
                  heroPost2 && heroPost2.subtitle
                }`}
              </p>
              <p className='hero-queue-card__subtitle'>
                {heroPost2 && heroPost2.tagline}
              </p>
            </div>
          </div>

          <div className='hero-queue-card'>
            <img
              src={`${process.env.REACT_APP_API_URL}${heroPost3PosterImg}`}
              alt='Queue_Image'
              className='hero-queue-card__img'
            />

            <div className='hero-queue-card__text-container'>
              <FiAward className='icon icon--queue-card' />
              <p className='hero-queue-card__title'>
                {`${heroPost3 && heroPost3.title}: ${
                  heroPost3 && heroPost3.subtitle
                }`}
              </p>
              <p className='hero-queue-card__subtitle'>
                {heroPost3 && heroPost3.tagline}
              </p>
            </div>
          </div>

          <div className='hero-queue-card'>
            <img
              src={`${process.env.REACT_APP_API_URL}${heroPost4PosterImg}`}
              alt='Queue_Image'
              className='hero-queue-card__img'
            />

            <div className='hero-queue-card__text-container'>
              <FiAward className='icon icon--queue-card' />
              <p className='hero-queue-card__title'>
                {`${heroPost4 && heroPost4.title}: ${
                  heroPost4 && heroPost4.subtitle
                }`}
              </p>
              <p className='hero-queue-card__subtitle'>
                {heroPost4 && heroPost4.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='hero-queue-link__container'>
        <p className='hero-queue-link__text'>Browse blog</p>
        <CgChevronRight className='icon' />
      </div>
    </section>
  );
}
export default Hero;
