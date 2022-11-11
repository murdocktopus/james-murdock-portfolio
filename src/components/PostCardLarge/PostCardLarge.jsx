import './PostCardLarge.scss';
import { Link, Route, Redirect } from 'react-router-dom';

function PostCardLarge(props) {
  return (
    <>
      <div className='post-card-large'>
        <img
          className='post-card-large__img'
          src={`${process.env.REACT_APP_API_URL}${props.imgHero}`}
          alt='Post_Image'
        />
        <p className='post-card-large__title'>
          <span className='post-card-large__title'>{props.title}:</span>{' '}
          <span className='post-card-large__subtitle'>{props.tagline}</span>{' '}
        </p>
      </div>
    </>
  );
}
export default PostCardLarge;
