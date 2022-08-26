import './PostFeed.scss';
// import { Link, Route, Redirect } from 'react-router-dom';
// import PostCardLarge from '../PostCardLarge/PostCardLarge';
import PostCardFull from '../PostCardFull/PostCardFull';

function PostFeed(props) {
  // console.log('PostFeed props.posts:', props && props.posts);
  return (
    <>
      <section className='post-feed-section'>
        <div className='post-feed'>
          <p className='post-feed__title'>{props.title}</p>
          <div className='post-feed__list-container'>
            {props.posts &&
              props.posts.map((post) => {
                return (
                  <PostCardFull
                    key={post.id}
                    id={post.id}
                    name={post.name}
                    selfLink={post.selfLink}
                    title={post.title}
                    subtitle={post.subtitle}
                    tagline={post.tagline}
                    imgHero={post.imgHero}
                    imgPoster={post.imgPoster}
                    icon={post.icon}
                    writtenDate={post.writtenDate}
                    publishedDate={post.publishedDate}
                    updatedDate={post.updatedDate}
                    adCopy={post.adCopy}
                    categoryTags={post.categoryTags}
                    skillTags={post.skillTags}
                    stackTags={post.stackTags}
                    pageAndLink={post.pageAndLink}
                    content={post.content}
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
