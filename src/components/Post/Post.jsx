import './Post.scss';
import { Link, Route, Redirect } from 'react-router-dom';

function Post(props) {
  console.log('Post props:', props);

  const postId = props.selectedPost.id;
  const postName = props.selectedPost.name;
  const postSelfLink = props.selectedPost.selfLink;
  const postTitle = props.selectedPost.title;
  const postSubtitle = props.selectedPost.subtitle;
  const postHeroImg = props.selectedPost.imgHero;
  const postPosterImg = props.selectedPost.imgPoster;
  const postIcon = props.selectedPost.icon;
  const postWrittenDate = props.selectedPost.writtenDate;
  const postPublishedDate = props.selectedPost.publishedDate;
  const postUpdatedDate = props.selectedPost.updatedDate;
  const postAdCopy = props.selectedPost.adCopy;
  const postTags = props.selectedPost.tags;
  const postSkillTags = props.selectedPost.skillTags;
  const postStackTags = props.selectedPost.stackTags;
  const postPageAndLink = props.selectedPost.pageAndLink;
  const postContent = props.selectedPost.content;

  const contentArr =
    postContent &&
    postContent.p.map((p) => <div className='post-content__div'>{p}</div>);

  console.log(contentArr);

  return (
    <>
      <div className='post'>
        <div className='post-hero'>
          <div
            className='post-hero__img'
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}${postHeroImg})`,
            }}
          ></div>
        </div>
        <div className='post-content'>{contentArr}</div>
      </div>
    </>
  );
}
export default Post;
