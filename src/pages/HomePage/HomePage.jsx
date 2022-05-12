import "./HomePage.scss";
import { Component } from "react";
import Hero from "../../components/Hero/Hero";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero />
      </div>
    );
  }
}
export default HomePage;
