import "./PostPlaylistLarge.scss";
import { Link, Route, Redirect } from "react-router-dom";
import PostCardLarge from "../PostCardLarge/PostCardLarge";

function PostPlaylistLarge(props) {
  return (
    <>
      <section className="post-playlist-large-section">
        <div className="playlist-large">
          <p className="playlist-large__title">{props.title}</p>
          <div className="playlist-large__list-container">
            <PostCardLarge />
            <PostCardLarge />
            <PostCardLarge />
          </div>
        </div>
      </section>
    </>
  );
}
export default PostPlaylistLarge;
