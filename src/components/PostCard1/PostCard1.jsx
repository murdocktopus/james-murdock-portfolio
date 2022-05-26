import "./PostCard1.scss";
import { Link, Route, Redirect } from "react-router-dom";
import image1 from "../../assets/images/forrestgump.jpg";

function PostCard1(props) {
  return (
    <>
      <div className="post-card1">
        <img className="post-card1__img" src={image1} alt="Post_Image" />
        <p className="post-card1__title">
          Top 10: My Favourite Movies of All Time
        </p>
      </div>
    </>
  );
}
export default PostCard1;
