import './Post.scss';
// import { Link, Route, Redirect } from 'react-router-dom';
import parse from 'html-react-parser';

function Post(props) {
  // INDEX ARRAYS (DAYS, MONTHS)
  const days = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  // ALL BASIC PROPS VARIABLES
  // const postId = props.selectedPost.id;
  // const postName = props.selectedPost.name;
  // const postSelfLink = props.selectedPost.selfLink;
  const postTitle = props.selectedPost.title;
  // const postSubtitle = props.selectedPost.subtitle;
  const postTagline = props.selectedPost.tagline;
  const postHeroImg = props.selectedPost.imgHero;
  // const postPosterImg = props.selectedPost.imgPoster;
  // const postIcon = props.selectedPost.icon;
  // const postWrittenDate = props.selectedPost.writtenDate;
  // const postUpdatedDate = props.selectedPost.updatedDate;
  // const postAdCopy = props.selectedPost.adCopy;
  const postTags = props.selectedPost.tags;
  const postSkillTags = props.selectedPost.skillTags;
  const postStackTags = props.selectedPost.stackTags;
  const postPageAndLink = props.selectedPost.pageAndLink;
  const postPublishedDate = new Date(
    props.selectedPost && props.selectedPost.publishedDate
  );
  const postContent =
    props.selectedPost.content && parse(props.selectedPost.content.join(' '));

  // DATE FORMAT CONVERSION FORMULA VARIABLES
  const postPublishedMonth = months[postPublishedDate.getMonth()];
  const postPublishedDay = days[postPublishedDate.getDay() - 1];
  const postPublishedYear = postPublishedDate.getFullYear();

  // SKILL TAGS WITHOUT BROAD TOPICS (Development, Design)
  const postSkillTagsWithoutDevelopment =
    postSkillTags && postSkillTags.filter((e) => e !== 'Development');
  const postSkillTagsWithoutDesign =
    postSkillTagsWithoutDevelopment &&
    postSkillTagsWithoutDevelopment.filter((e) => e !== 'Design');
  const shownSkillTags = postSkillTagsWithoutDesign;

  // const postMedia =
  //   props.selectedPost.content &&
  //   props.selectedPost.content.media &&
  //   props.selectedPost.content.media[0].link;
  // const dangerousPostMedia = (
  //   <div
  //     className='post-content__media-container'
  //     key={Math.floor(Math.random() * 100000000)}
  //     dangerouslySetInnerHTML={{ __html: postMedia && postMedia }}
  //   />
  // );
  // const mediaSplicePosition =
  //   props.selectedPost.content &&
  //   props.selectedPost.content.media &&
  //   props.selectedPost.content.media[0].sliceAfterParagraph;

  // const contentArr =
  //   postContent &&
  //   postContent.map((p, index) => (
  //     <div
  //       className='post-content__div'
  //       key={Math.floor(Math.random() * 100000000)}
  //     >
  //       <p
  //         className='post-content__p'
  //         key={Math.floor(Math.random() * 100000000)}
  //       >
  //         {p}
  //       </p>
  //     </div>
  //   ));

  // const displayedMedia =
  //   contentArr && contentArr.splice(mediaSplicePosition, 0, dangerousPostMedia);

  return (
    <>
      <div className='post'>
        <div className='post-header-container'>
          <div className='post-info'>
            <h2 className='post-title'>{postTitle}</h2>
            <p className='post-published-date'>
              Published: {postPublishedMonth}-{postPublishedDay}-
              {postPublishedYear} by James Murdock
            </p>
          </div>

          <div className='post-page-link-container'>
            {postPageAndLink &&
              postPageAndLink.map((object) => {
                // console.log(object);
                return (
                  <p
                    className='post-page-chip post-page-chip--page-tags'
                    key={Math.random()}
                  >
                    {object.page}
                  </p>
                );
              })}
          </div>
        </div>

        <div className='post-hero'>
          <div
            className='post-img'
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}${postHeroImg})`,
            }}
          ></div>
        </div>
        <div className='post-more-info'>
          <p className='post-more-info__title'>{postTitle}:&nbsp;</p>
          <p className='post-subtitle'>{postTagline}</p>
          <div className='post-skill-tags'>
            {shownSkillTags &&
              shownSkillTags.map((tag) => {
                // console.log(tag);
                return (
                  <p
                    className='post-page-chip post-page-chip--skill-tags'
                    key={Math.random()}
                  >
                    {tag}
                  </p>
                );
              })}
          </div>
        </div>

        <div className='post-content'>{postContent}</div>
        <div className='post-tags'>
          <p className='post-tags__title'>#PostTags</p>
          <div className='post-tags__tags'>
            {postTags &&
              postTags.map((tag) => {
                // console.log(tag);
                return (
                  <p
                    className='post-page-chip post-page-chip--tags'
                    key={Math.random()}
                  >
                    {tag}
                  </p>
                );
              })}
            {postSkillTags &&
              postSkillTags.map((tag) => {
                // console.log(tag);
                return (
                  <p
                    className='post-page-chip post-page-chip--skill-tags'
                    key={Math.random()}
                  >
                    {tag}
                  </p>
                );
              })}
            {postStackTags &&
              postStackTags.map((tag) => {
                // console.log(tag);
                return (
                  <p
                    className='post-page-chip post-page-chip--stack-tags'
                    key={Math.random()}
                  >
                    {tag}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
