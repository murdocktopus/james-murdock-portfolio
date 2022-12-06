import './PortfolioFeedPage.scss';
// import { Component } from 'react';
import PostFeed from '../../components/PostFeed/PostFeed';

function PortfolioFeedPage(props) {
  console.log(
    'PortfolioFeedPage props.allPosts:',
    props.allPosts.filter((post) => post.tags.includes('Portfolio'))
  );
  return (
    <div className='portfolio-page'>
      <PostFeed
        title='Portfolio'
        posts={props.allPosts.filter((post) => post.tags.includes('Portfolio'))}
      />
    </div>
  );
}
export default PortfolioFeedPage;
