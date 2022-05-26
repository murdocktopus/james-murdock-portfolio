import "./PostPlaylist2.scss";
import { Link, Route, Redirect } from "react-router-dom";
import PostCard1 from "../PostCard1/PostCard1";
import PostCard2 from "../PostCard2/PostCard2";

function PostPlaylist2(props) {
  return (
    <>
      <section className="post-playlist-section">
        <div className="playlist">
          <p className="playlist__title">{props.title}</p>
          <div className="playlist__list-container">
            <PostCard2 />
            <PostCard2 />
            <PostCard2 />
            <PostCard2 />
            <PostCard2 />
            <PostCard2 />
          </div>
        </div>
      </section>
    </>
  );
}
export default PostPlaylist2;
