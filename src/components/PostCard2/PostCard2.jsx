import "./PostCard2.scss";
import { Link, Route, Redirect } from "react-router-dom";
import image2 from "../../assets/images/Forrest_Gump_poster.jpg";

function PostCard2(props) {
  return (
    <>
      <div className="post-card2">
        <img className="post-card2__img" src={image2} alt="Post_Image" />
        <p className="post-card2__title">
          Top 10: My Favourite Movies of All Time
        </p>
      </div>
    </>
  );
}
export default PostCard2;
