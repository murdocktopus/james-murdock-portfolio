import "./PostPlaylistSmall.scss";
import { Link, Route, Redirect } from "react-router-dom";
import PostCardSmall from "../PostCardSmall/PostCardSmall";

function PostPlaylistSmall(props) {
  return (
    <>
      <section className="post-playlist-small-section">
        <div className="playlist-small">
          <p className="playlist-small__title">{props.title}</p>
          <div className="playlist-small__list-container">
            <PostCardSmall />
            <PostCardSmall />
            <PostCardSmall />
            <PostCardSmall />
            <PostCardSmall />
            <PostCardSmall />
          </div>
        </div>
      </section>
    </>
  );
}
export default PostPlaylistSmall;
