import './BlogPostPage.scss';
import { Component } from 'react';
import Post from '../../components/Post/Post';
import { useParams } from 'react-router-dom';

class BlogPostPage extends Component {
  componentDidMount() {
    if (
      this.props.selectedPost &&
      this.props.selectedPost.name !== window.location.pathname.slice(6)
    ) {
      this.props.getSetPost();
    }
  }

  componentDidUpdate() {
    if (
      this.props.selectedPost &&
      this.props.selectedPost.name !== window.location.pathname.slice(6)
    ) {
      this.props.getSetPost();
    }
  }

  render() {
    return (
      <div className='post-page'>
        <Post selectedPost={this.props.selectedPost} />
      </div>
    );
  }
}
export default BlogPostPage;
