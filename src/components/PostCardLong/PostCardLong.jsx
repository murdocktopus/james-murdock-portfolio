import './PostCardLong.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import heroImage from '../../assets/images/forrestgump.jpg';
import posterImage from '../../assets/images/Forrest_Gump_poster.jpg';

function PostCardLong(props) {
  // console.log('PostCardLong props:', props);
  console.log(`${process.env.REACT_APP_API_URL}`);
  return (
    <>
      <div className='post-card-long'>
        <img
          className='post-card-long__img1'
          src={`${process.env.REACT_APP_API_URL}${props.imgHero}`}
          alt='Post_Image'
        />
        <img
          className='post-card-long__img2'
          src={`${process.env.REACT_APP_API_URL}${props.imgPoster}`}
          alt='Post_Image'
        />
        <p className='post-card-long__title'>{props.title}</p>

        {props.sections &&
          props.sections.slice(0, 3).map((section) => {
            return (
              <p className='post-card-long__text' key={Math.random()}>
                {section.content}
              </p>
            );
          })}
      </div>
    </>
  );
}
export default PostCardLong;
