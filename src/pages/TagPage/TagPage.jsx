import './TagPage.scss';
import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import PostPlaylistLarge from '../../components/PostPlaylistLarge/PostPlaylistLarge';
import PostPlaylistSmall from '../../components/PostPlaylistSmall/PostPlaylistSmall';
import PostFeed from '../../components/PostFeed/PostFeed';

function TagPage(props) {
  console.log('TagPage props:', props);
  return (
    <div className='tag-page'>
      <PostFeed title='Blog' posts={props.allPosts} />
    </div>
  );
}
export default TagPage;
