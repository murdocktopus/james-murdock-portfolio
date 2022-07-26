import './BlogPage.scss';
import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import PostPlaylistLarge from '../../components/PostPlaylistLarge/PostPlaylistLarge';
import PostPlaylistSmall from '../../components/PostPlaylistSmall/PostPlaylistSmall';
import PostFeed from '../../components/PostFeed/PostFeed';

function BlogPage(props) {
  console.log(props);
  return (
    <div className='blog-page'>
      <PostFeed title='Blog' posts={props.allPosts} />
    </div>
  );
}
export default BlogPage;
