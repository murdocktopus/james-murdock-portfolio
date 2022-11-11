import './PostPlaylistSmall.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import PostCardSmall from '../PostCardSmall/PostCardSmall';

function PostPlaylistSmall(props) {
  return (
    <>
      <section className='post-playlist-small-section'>
        <div className='playlist-small'>
          <p className='playlist-small__title'>{props.title}</p>
          <div className='playlist-small__list-container'>
            {props.posts &&
              props.posts.map((post) => {
                return (
                  <PostCardSmall
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
export default PostPlaylistSmall;
