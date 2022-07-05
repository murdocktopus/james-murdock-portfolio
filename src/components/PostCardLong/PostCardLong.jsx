import "./PostCardLong.scss";
import { Link, Route, Redirect } from "react-router-dom";
import image1 from "../../assets/images/forrestgump.jpg";
import image2 from "../../assets/images/Forrest_Gump_poster.jpg";

function PostCardLong(props) {
  return (
    <>
      <div className="post-card-long">
        <img className="post-card-long__img1" src={image1} alt="Post_Image" />
        <img className="post-card-long__img2" src={image2} alt="Post_Image" />
        <p className="post-card-long__title">
          Top 10: My Favourite Movies of All Time
        </p>
        <p className="post-card-long__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum
          posuere justo. Ut malesuada mattis vestibulum. Phasellus suscipit
          facilisis dui sed finibus. Cras at mollis eros, sed rutrum nisl. Fusce
          elementum lacus id placerat accumsan. Aliquam accumsan ex in feugiat
          efficitur. Vestibulum eu laoreet metus.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum
          posuere justo. Ut malesuada mattis vestibulum. Phasellus suscipit
          facilisis dui sed finibus. Cras at mollis eros, sed rutrum nisl. Fusce
          elementum lacus id placerat accumsan. Aliquam accumsan ex in feugiat
          efficitur. Vestibulum eu laoreet metus.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum
          posuere justo. Ut malesuada mattis vestibulum. Phasellus suscipit
          facilisis dui sed finibus. Cras at mollis eros, sed rutrum nisl. Fusce
          elementum lacus id placerat accumsan. Aliquam accumsan ex in feugiat
          efficitur. Vestibulum eu laoreet metus.
        </p>
      </div>
    </>
  );
}
export default PostCardLong;
