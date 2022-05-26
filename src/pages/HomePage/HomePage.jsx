import "./HomePage.scss";
import { Component } from "react";
import Hero from "../../components/Hero/Hero";
import PostPlaylist1 from "../../components/PostPlaylist1/PostPlaylist1";
import PostPlaylist2 from "../../components/PostPlaylist2/PostPlaylist2";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero />
        <PostPlaylist1 title="Featured Today" />
        <PostPlaylist2 title="Blog" />
        <PostPlaylist2 title="Projects" />
      </div>
    );
  }
}
export default HomePage;
