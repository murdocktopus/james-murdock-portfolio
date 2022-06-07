import "./BlogPage.scss";
import { Component } from "react";
import Hero from "../../components/Hero/Hero";
import PostPlaylistLarge from "../../components/PostPlaylistLarge/PostPlaylistLarge";
import PostPlaylistSmall from "../../components/PostPlaylistSmall/PostPlaylistSmall";

class BlogPage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero />
        <PostPlaylistLarge title="Featured Today" />
        <PostPlaylistSmall title="Blog" />
        <PostPlaylistSmall title="Projects" />
      </div>
    );
  }
}
export default BlogPage;
