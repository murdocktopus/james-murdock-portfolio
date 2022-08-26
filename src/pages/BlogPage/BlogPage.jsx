import './BlogPage.scss';
// import { Component } from 'react';
import PostFeed from '../../components/PostFeed/PostFeed';

function BlogPage(props) {
  console.log('BlogPage props.allPosts:', props.allPosts);
  return (
    <div className='blog-page'>
      <PostFeed title='Blog' posts={props.allPosts} />
    </div>
  );
}
export default BlogPage;
