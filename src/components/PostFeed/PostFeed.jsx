import './PostFeed.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import PostCardLarge from '../PostCardLarge/PostCardLarge';
import PostCardLong from '../PostCardLong/PostCardLong';

function PostFeed(props) {
  console.log('PostFeed props.posts:', props.posts);
  return (
    <>
      <section className='post-feed-section'>
        <div className='post-feed'>
          <p className='post-feed__title'>{props.title}</p>
          <div className='post-feed__list-container'>
            {props.posts &&
              props.posts.map((post) => {
                return (
                  <PostCardLong
                    key={post.id}
                    id={post.id}
                    selfLink={post.selfLink}
                    title={post.title}
                    subtitle={post.subtitle}
                    imgHero={post.imgHero}
                    imgPoster={post.imgPoster}
                    icon={post.icon}
                    publishedDate={post.publishedDate}
                    adCopy={post.adCopy}
                    categoryTags={post.categoryTags}
                    skillTags={post.skillTags}
                    pageAndLink={post.pageAndLink}
                    sections={post.sections}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
export default PostFeed;
