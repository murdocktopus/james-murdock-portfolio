import './PostPage.scss';
import { Component } from 'react';
import Post from '../../components/Post/Post';

class PostPage extends Component {
  state = {
    selectedPost: {},
  };

  componentDidMount(props) {}

  componentDidUpdate(props) {
    if (this.state.selectedPost.name !== window.location.pathname.slice(1)) {
      this.getSetPost();
    }
  }

  getSetPost = () => {
    const foundPost = this.props.allPosts.find(
      (post) => post.name === window.location.pathname.slice(1)
    );
    this.setState({
      selectedPost: foundPost,
    });
  };

  render(props) {
    return (
      <div className='post-page'>
        <Post selectedPost={this.state.selectedPost} />
      </div>
    );
  }
}
export default PostPage;
