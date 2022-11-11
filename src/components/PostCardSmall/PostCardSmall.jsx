import './PostCardSmall.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import posterImg from '../../assets/images/Forrest_Gump_poster.jpg';

function PostCardSmall(props) {
  return (
    <>
      <div className='post-card-small'>
        <img
          className='post-card-small__img'
          src={`${process.env.REACT_APP_API_URL}${props.imgPoster}`}
          alt='Post_Image'
        />
        <p className='post-card-small__title'>
          <span className='post-card-large__title'>{props.title}:</span>{' '}
          <span className='post-card-large__subtitle'>{props.tagline}</span>{' '}
        </p>
      </div>
    </>
  );
}
export default PostCardSmall;
