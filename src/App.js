import './App.css';
import './styles/_global.scss';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import BlogFeedPage from './pages/BlogFeedPage/BlogFeedPage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
import TagFeedPage from './pages/TagFeedPage/TagFeedPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';

class App extends Component {
  state = {
    allPosts: [],
    searchTerm: '',
    searchSubmitted: false,
    selectedPost: {},
    tagsAsPaths: [],
    pagesAsPaths: [],
    allTags: [],
  };

  componentDidMount() {
    this.getPosts();
    // this.getTagRoutes();
  }

  componentDidUpdate() {
    if (this.state.tagsAsPaths === false) {
      console.log(this.state.tagsAsPaths);
      this.getTagRoutes();
    }
    // console.log('App', 'this.state.allPosts:', this.state.allPosts);
  }

  getTagRoutes = () => {
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

  getSetPost = () => {
    const foundPost = this.state.allPosts.find(
      (post) => post.name === window.location.pathname.slice(1)
    );
    console.log('foundPost', foundPost);
    this.setState({
      selectedPost: foundPost,
    });
  };

  getSetPages = () => {
    const allPosts = this.state.allPosts;
    const allPages2DArr =
      allPosts &&
      allPosts.map((post) => post.pageAndLink.map((page) => `/${page.page}`));

    const allPages1DArr = [].concat(...(allPages2DArr && allPages2DArr));
    const pagesAsPaths = [...new Set(allPages1DArr)];
    this.setState({
      pagesAsPaths: pagesAsPaths,
    });
    console.log(pagesAsPaths);
  };

  // getPostRoutes = () => {
  //   const allPosts = this.state.allPosts;
  //   const postNames2DArr = allPosts && allPosts.map((post) => post.name);
  //   const allNames1DArr = [].concat(...(postNames2DArr && postNames2DArr));
  //   this.setState({
  //     selectedPost: postTagsFormatted,
  //   });
  // };

  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blog-posts`)
      .then((response) => {
        // console.log('All Posts in API', response.data);
        let allPosts = response.data;
        this.setState({
          allPosts: allPosts,
        });
        this.getTagRoutes();
      })
      .catch((err) => {
        console.log('error 1 catch', err);
      });
  };

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
    const skillTags2DArr = allPosts && allPosts.map((post) => post.skillTags);
    const stackTags2DArr = allPosts && allPosts.map((post) => post.stackTags);
    const allTags2DArr = postTags2DArr.concat(skillTags2DArr, stackTags2DArr);
    const allTags1DArr = [].concat(...(allTags2DArr && allTags2DArr));
    const postTagsFormatted =
      allTags1DArr &&
      allTags1DArr.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());

    const tagsAsPaths =
      postTagsFormatted && postTagsFormatted.map((tag) => `/tag/${tag}`);

    const postsAsPaths = allPosts && allPosts.map((post) => `/${post.name}`);

    const allPages2DArr =
      allPosts &&
      allPosts.map((post) =>
        post.pageAndLink.map((page) => `/pag/${page.page.toLowerCase()}`)
      );

    const allPages1DArr = [].concat(...(allPages2DArr && allPages2DArr));
    const pagesAsPaths = [...new Set(allPages1DArr)];

    console.log(pagesAsPaths);

    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact>
              <HomePage allPosts={this.state.allPosts} />
            </Route>
            <Route path='/blog' exact>
              <BlogFeedPage allPosts={this.state.allPosts} />
            </Route>
            <Route path={tagsAsPaths} exact>
              <TagFeedPage
                allPosts={this.state.allPosts}
                tagsAsPaths={this.state.tagsAsPaths}
                allTags={this.state.allTags}
              />
            </Route>
            <Route path={pagesAsPaths} exact>
              <TagFeedPage
                allPosts={this.state.allPosts}
                tagsAsPaths={this.state.pagesAsPaths}
                allTags={this.state.allTags}
              />
            </Route>
            <Route path={postsAsPaths} exact>
              <BlogPostPage
                selectedPost={this.state.selectedPost}
                getSetPost={this.getSetPost}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
