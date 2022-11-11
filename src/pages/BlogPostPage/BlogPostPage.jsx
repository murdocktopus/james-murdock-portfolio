import './BlogPostPage.scss';
import { Component } from 'react';
import Post from '../../components/Post/Post';

class BlogPostPage extends Component {
  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.selectedPost.name !== window.location.pathname.slice(1)) {
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
