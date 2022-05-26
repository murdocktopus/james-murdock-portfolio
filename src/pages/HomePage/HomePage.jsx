import "./HomePage.scss";
import { Component } from "react";
import Hero from "../../components/Hero/Hero";
import PostPlaylist1 from "../../components/PostPlaylist1/PostPlaylist1";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero />
        <PostPlaylist1 />
      </div>
    );
  }
}
export default HomePage;
