import "./PostPlaylist1.scss";
import { Link, Route, Redirect } from "react-router-dom";
import image1 from "../../assets/images/forrestgump.jpg";
import PostCard1 from "../PostCard1/PostCard1";

function PostPlaylist1(props) {
  return (
    <>
      <section className="post-playlist-section">
        <div className="playlist">
          <p className="playlist__title">Featured Today</p>
          <div className="playlist__list-container">
            <PostCard1 />
            <PostCard1 />
            <PostCard1 />
          </div>
        </div>
      </section>
    </>
  );
}
export default PostPlaylist1;
