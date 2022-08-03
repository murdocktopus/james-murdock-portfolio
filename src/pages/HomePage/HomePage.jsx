import './HomePage.scss';
import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import PostPlaylistLarge from '../../components/PostPlaylistLarge/PostPlaylistLarge';
import PostPlaylistSmall from '../../components/PostPlaylistSmall/PostPlaylistSmall';

class HomePage extends Component {
  state = {
    allPosts: [],
    heroPosts: [],
    featuredPosts: [],
    featuredCategories: ['portfolio', 'blog'],
  };
  render() {
    return (
      <div className='home-page'>
        <Hero heroPosts={this.state.heroPosts} />
        <PostPlaylistLarge title='Featured Today' />
        <PostPlaylistSmall title='Blog' />
        <PostPlaylistSmall title='Projects' />
      </div>
    );
  }
}
export default HomePage;
