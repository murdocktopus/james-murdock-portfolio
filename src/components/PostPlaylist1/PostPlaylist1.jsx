import "./PostPlaylist1.scss";
import { Link, Route, Redirect } from "react-router-dom";
import PostCard1 from "../PostCard1/PostCard1";

function PostPlaylist1(props) {
  return (
    <>
      <section className="post-playlist1-section">
        <div className="playlist1">
          <p className="playlist1__title">{props.title}</p>
          <div className="playlist1__list-container">
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
