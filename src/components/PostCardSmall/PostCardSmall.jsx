import "./PostCardSmall.scss";
import { Link, Route, Redirect } from "react-router-dom";
import image2 from "../../assets/images/Forrest_Gump_poster.jpg";

function PostCardSmall(props) {
  return (
    <>
      <div className="post-card-small">
        <img className="post-card-small__img" src={image2} alt="Post_Image" />
        <p className="post-card-small__title">
          Top 10: My Favourite Movies of All Time
        </p>
      </div>
    </>
  );
}
export default PostCardSmall;
