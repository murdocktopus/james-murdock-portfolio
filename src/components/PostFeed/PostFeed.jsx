import "./PostFeed.scss";
import { Link, Route, Redirect } from "react-router-dom";
import PostCardLarge from "../PostCardLarge/PostCardLarge";
import PostCardLong from "../PostCardLong/PostCardLong";

function PostFeed(props) {
  return (
    <>
      <section className="post-feed-section">
        <div className="post-feed">
          <p className="post-feed__title">{props.title}</p>
          <div className="post-feed__list-container">
            <PostCardLong />
            <PostCardLong />
            <PostCardLong />
          </div>
        </div>
      </section>
    </>
  );
}
export default PostFeed;
