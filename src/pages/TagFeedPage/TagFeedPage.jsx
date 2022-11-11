import './TagFeedPage.scss';
import { Component } from 'react';
import PostFeed from '../../components/PostFeed/PostFeed';

const addressTag = window.location.pathname
  .slice(5)
  .replace(/-/g, ' ')
  .toLowerCase();

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

// console.log(titleCase(addressTag));

class TagFeedPage extends Component {
  state = {
    selectedPosts: [],
    tag: '',
  };

  componentDidMount(props) {}

  componentDidUpdate(props) {
    if (this.state.tag.toLowerCase() !== `${addressTag}`) {
      this.getSetPosts();
    }
    console.log(this.state.tag);
  }

  getSetPosts = () => {
    const allPosts = this.props.allPosts;
    const foundTagPosts = allPosts.filter(
      (post) => post.tags.includes(`${titleCase(addressTag)}`) === true
    );
    const foundSkillTagPosts = allPosts.filter(
      (post) => post.skillTags.includes(`${titleCase(addressTag)}`) === true
    );
    const foundStackTagPosts = allPosts.filter(
      (post) => post.stackTags.includes(`${titleCase(addressTag)}`) === true
    );
    const allTagPosts2DArr = foundTagPosts.concat(
      foundSkillTagPosts,
      foundStackTagPosts
    );
    const allTagPosts1DArr = [].concat(
      ...(allTagPosts2DArr && allTagPosts2DArr)
    );
    const allTagsNoDuplicates = [...new Set(allTagPosts1DArr)];
    console.log(allTagsNoDuplicates);
    this.setState({
      selectedPosts: allTagsNoDuplicates,
      tag: `${titleCase(addressTag)}`,
    });
  };

  render(props) {
    return (
      <div className='blog-page'>
        <PostFeed
          title={`${titleCase(addressTag)} Posts`}
          posts={this.state.selectedPosts}
        />
      </div>
    );
  }
}

export default TagFeedPage;
