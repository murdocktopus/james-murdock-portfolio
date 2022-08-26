import './TagPage.scss';
import { Component } from 'react';
import PostFeed from '../../components/PostFeed/PostFeed';

const addressTag =
  window.location.pathname.slice(5).charAt(0).toUpperCase() +
  window.location.pathname.slice(6);

class TagPage extends Component {
  state = {
    selectedPosts: [],
    tag: '',
  };

  componentDidMount(props) {}

  componentDidUpdate(props) {
    if (this.state.tag !== `${addressTag}`) {
      this.getSetPosts();
    }

    // console.log('TagPage State selectedPosts:', this.state.selectedPosts);

    // console.log(
    //   window.location.pathname.slice(5).charAt(0).toUpperCase() +
    //     window.location.pathname.slice(6)
    // );
  }

  getSetPosts = () => {
    const allPosts = this.props.allPosts;
    const foundPosts = allPosts.filter(
      (post) => post.tags.includes(`${addressTag}`) === true
    );
    // console.log(foundPosts);
    this.setState({
      selectedPosts: foundPosts,
      tag: `${addressTag}`,
    });

    // const postTags = allPosts.tags;
    // const postSkillTags = allPosts.skillTags;
    // const postStackTags = allPosts.stackTags;
    // const mergeTags =
    //   postTags &&
    //   postTags.concat(
    //     postSkillTags && postSkillTags,
    //     postStackTags && postStackTags
    //   );
    // const filteredPosts =
    //   mergeTags && mergeTags.filter((tag) => tag === `${addressTag}`);
  };

  render(props) {
    return (
      <div className='blog-page'>
        <PostFeed
          title={`${addressTag} Posts`}
          posts={this.state.selectedPosts}
        />
      </div>
    );
  }
}

export default TagPage;
