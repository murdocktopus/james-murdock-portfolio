import './PostCardLarge.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import heroImg from '../../assets/images/forrestgump.jpg';

function PostCardLarge(props) {
  return (
    <>
      <div className='post-card-large'>
        <img className='post-card-large__img' src={heroImg} alt='Post_Image' />
        <p className='post-card-large__title'>
          Top 10: My Favourite Movies of All Time
        </p>
      </div>
    </>
  );
}
export default PostCardLarge;
