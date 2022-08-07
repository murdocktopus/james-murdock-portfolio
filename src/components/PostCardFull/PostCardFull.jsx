import './PostCardFull.scss';
import { Link, Route, Redirect } from 'react-router-dom';

function PostCardFull(props) {
  // console.log('PostCardFull props:', props);
  // console.log(`${process.env.REACT_APP_API_URL}`);
  return (
    <>
      <div className='post-card-full'>
        <div className='post-card-full__img-container'>
          <img
            className='post-card-full__imgHero'
            src={`${process.env.REACT_APP_API_URL}${props.imgHero}`}
            alt='Post_Image'
          />
          <img
            className='post-card-full__imgPoster'
            src={`${process.env.REACT_APP_API_URL}${props.imgPoster}`}
            alt='Post_Image'
          />
        </div>
        <div className='post-card-full__text-container'>
          <p className='post-card-full__title'>{props.title}</p>
          <p className='post-card-full__text'>{props.subtitle}</p>
          {/* <p className='post-card-full__text'>{props.tags}</p> */}
          <p className='post-card-full__text'>
            {props.content.p && props.content.p.slice(0, 1)}&#8230;&#91;Read
            More&#93;
          </p>
        </div>
      </div>
    </>
  );
}
export default PostCardFull;
