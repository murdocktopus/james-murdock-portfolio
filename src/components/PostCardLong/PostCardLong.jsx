import "./PostCardLong.scss";
import { Link, Route, Redirect } from "react-router-dom";
import image2 from "../../assets/images/Forrest_Gump_poster.jpg";

function PostCardLong(props) {
  return (
    <>
      <div className="post-card-long">
        <img className="post-card-long__img" src={image2} alt="Post_Image" />
        <p className="post-card-long__title">
          Top 10: My Favourite Movies of All Time
        </p>
      </div>
    </>
  );
}
export default PostCardLong;
