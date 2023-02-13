import './HomePage.scss';
import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import PostPlaylistLarge from '../../components/PostPlaylistLarge/PostPlaylistLarge';
import PostPlaylistSmall from '../../components/PostPlaylistSmall/PostPlaylistSmall';

function HomePage(props) {
  return (
    <div className='home-page'>
      <Hero
        allPosts={props && props.allPosts}
        heroPosts={props && props.heroPosts}
      />
      {/* <PostPlaylistLarge title='Featured' posts={props.allPosts} />
      <PostPlaylistSmall title='Blog' posts={props.allPosts} /> */}
      <PostPlaylistSmall title='Projects' posts={props.allPosts} />
    </div>
  );
}
export default HomePage;
