import './BlogFeedPage.scss';
// import { Component } from 'react';
import PostFeed from '../../components/PostFeed/PostFeed';

function BlogFeedPage(props) {
  console.log('BlogFeedPage props.allPosts:', props.allPosts);
  return (
    <div className='blog-page'>
      <PostFeed title='Blog' posts={props.allPosts} />
    </div>
  );
}
export default BlogFeedPage;
