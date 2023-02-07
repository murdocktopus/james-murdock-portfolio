import './App.css';
import './styles/_global.scss';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  // Redirect,
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import BlogFeedPage from './pages/BlogFeedPage/BlogFeedPage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
import TagFeedPage from './pages/TagFeedPage/TagFeedPage';
import PortfolioFeedPage from './pages/PortfolioFeedPage/PortfolioFeedPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import MenuModal from './components/MenuModal/MenuModal';

class App extends Component {
  state = {
    allPosts: [],
    allTags: [],
    heroPosts: [],
    selectedPost: {},
    tagsAsPaths: [],

    // pagesAsPaths: [],
    // searchTerm: '',
    // searchSubmitted: false,
  };

  //
  //
  //
  // Component Lifecycle Events (Below)
  //
  //
  //

  componentDidMount() {
    this.getPosts();
    // this.getSetTagsAndTagRoutes();
  }

  componentDidUpdate() {
    if (this.state.tagsAsPaths === false) {
      console.log(this.state.tagsAsPaths);
      this.getSetTagsAndTagRoutes();
    }
    // console.log('App', 'this.state.heroPosts:', this.state.heroPosts);
  }

  //
  //
  //
  // "Executive" Functions (Below)
  //
  //
  //

  // Immediate Functions (with Axios Request)
  //
  //

  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blog-posts`)
      .then((response) => {
        // console.log('All Posts in API', response.data);
        let allPosts = response.data;
        this.setState({
          allPosts: allPosts,
        });
        this.getSetTagsAndTagRoutes();
        this.getSetHeroPosts();
      })
      .catch((err) => {
        console.log('error 1 catch', err);
      });
  };

  getSetHeroPosts = () => {
    const allPosts = this.state.allPosts;
    const heroPosts = [
      allPosts.find((posts) => posts.hero === 1),
      allPosts.find((posts) => posts.hero === 2),
      allPosts.find((posts) => posts.hero === 3),
      allPosts.find((posts) => posts.hero === 1),
    ];
    this.setState({
      heroPosts: heroPosts,
    });
    // console.log(`heroposts`, heroPosts);
  };

  getSetTagsAndTagRoutes = () => {
    // This Function takes all the different types of tags (tags, stack tags, skill tags)
    // and puts them into a single array, replaces capital letters and hyphens,
    // and sets the array as the state for allTags and tagsAsPaths (w/ ((tag) => `/tag/${tag}`))
    const allPosts = this.state.allPosts;
    const postTags2DArr = allPosts && allPosts.map((post) => post.tags);
    const skillTags2DArr = allPosts && allPosts.map((post) => post.skillTags);
    const stackTags2DArr = allPosts && allPosts.map((post) => post.stackTags);
    const allTags2DArr = postTags2DArr.concat(skillTags2DArr, stackTags2DArr);
    const allTags1DArr = [].concat(...(allTags2DArr && allTags2DArr));
    const postTagsFormatted =
      allTags1DArr &&
      allTags1DArr.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());
    this.setState({
      allTags: postTagsFormatted,
    });
    const tagsAsPaths =
      postTagsFormatted && postTagsFormatted.map((tag) => `/tag/${tag}`);
    this.setState({
      tagsAsPaths: tagsAsPaths,
    });
  };

  // Secondary Exec Functions w/
  //
  //

  getSetPost = () => {
    // Finds the post thats name matches the URL and sets State as selectedPost
    const foundPost = this.state.allPosts.find(
      (post) => post.name === window.location.pathname.slice(6)
    );
    console.log('foundPost', foundPost);
    this.setState({
      selectedPost: foundPost,
    });
  };

  // getSetPages = () => {
  //   const allPosts = this.state.allPosts;
  //   const allPages2DArr =
  //     allPosts &&
  //     allPosts.map((post) => post.pageAndLink.map((page) => `/${page.page}`));

  //   const allPages1DArr = [].concat(...(allPages2DArr && allPages2DArr));
  //   const pagesAsPaths = [...new Set(allPages1DArr)];
  //   this.setState({
  //     pagesAsPaths: pagesAsPaths,
  //   });
  //   console.log(pagesAsPaths);
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Submit Search Event Target Value:', e.target.search.value);
  //   this.setState(
  //     {
  //       searchSubmitted: true,
  //       searchTerm: e.target.search.value,
  //     },
  //     () => {
  //       this.getBlogPostsGooglePrior();
  //     }
  //   );
  //   e.target.reset();
  // };

  render() {
    const allPosts = this.state.allPosts;
    const postTags2DArr = allPosts && allPosts.map((post) => post.tags);
    const postTags1DArr = [].concat(...(postTags2DArr && postTags2DArr));
    const skillTags2DArr = allPosts && allPosts.map((post) => post.skillTags);
    const skillTags1DArr = [].concat(...(skillTags2DArr && skillTags2DArr));
    const stackTags2DArr = allPosts && allPosts.map((post) => post.stackTags);
    const stackTags1DArr = [].concat(...(stackTags2DArr && stackTags2DArr));
    const allTags2DArr = postTags2DArr.concat(skillTags2DArr, stackTags2DArr);
    const allTags1DArr = [].concat(...(allTags2DArr && allTags2DArr));
    const postTagsFormatted =
      allTags1DArr &&
      allTags1DArr.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());

    // const tagsAsPaths =
    //   postTagsFormatted && postTagsFormatted.map((tag) => `/tag/${tag}`);

    // const tagsAsRoutes =
    //   postTagsFormatted &&
    //   postTagsFormatted.map((tag) => (
    //     <Route
    //       path={`/tag/${tag}`}
    //       element={
    //         <TagFeedPage
    //           allPosts={this.state.allPosts}
    //           tagsAsPaths={this.state.tagsAsPaths}
    //           allTags={this.state.allTags}
    //         />
    //       }
    //     />
    //   ));

    // const postsAsPaths = allPosts && allPosts.map((post) => `/${post.name}`);
    // const postsAsRoutes =
    //   allPosts &&
    //   allPosts.map((post) => (
    //     <Route
    //       path={`/${post.name}`}
    //       element={
    //         <BlogPostPage
    //           selectedPost={this.state.selectedPost}
    //           getSetPost={this.getSetPost}
    //         />
    //       }
    //     />
    //   ));

    return (
      <div className='App'>
        <Router>
          <Header />
          <MenuModal
            allTags={this.state.allTags}
            postTagsFormatted={postTagsFormatted}
            allTags1DArr={allTags1DArr}
            postTags1DArr={postTags1DArr}
          />
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  allPosts={this.state.allPosts}
                  heroPosts={this.state.heroPosts}
                />
              }
            />
            <Route
              path='/blog'
              element={<BlogFeedPage allPosts={this.state.allPosts} />}
            />
            <Route
              path='/portfolio'
              element={<PortfolioFeedPage allPosts={this.state.allPosts} />}
            />
            {postTagsFormatted &&
              postTagsFormatted.map((tag) => (
                <Route
                  key={tag}
                  path={`/tag/${tag}`}
                  element={
                    <TagFeedPage
                      allPosts={this.state.allPosts}
                      tagsAsPaths={this.state.tagsAsPaths}
                      allTags={this.state.allTags}
                    />
                  }
                />
              ))}
            {allPosts &&
              allPosts.map((post) => (
                <Route
                  key={post.id}
                  path={`post/:${post.name}`}
                  element={
                    <BlogPostPage
                      selectedPost={this.state.selectedPost}
                      getSetPost={this.getSetPost}
                    />
                  }
                />
              ))}
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
