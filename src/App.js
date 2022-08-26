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
import BlogPage from './pages/BlogPage/BlogPage';
import PostPage from './pages/PostPage/PostPage';
import TagPage from './pages/TagPage/TagPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';

class App extends Component {
  state = {
    allPosts: [],
    searchTerm: '',
    searchSubmitted: false,
    selectedBlogPost: {},
    tagsAsPaths: [],
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
    const postTags1DArr = [].concat(...(postTags2DArr && postTags2DArr));
    const postTagsFormatted =
      postTags1DArr &&
      postTags1DArr.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());
    const tagsAsPaths =
      postTagsFormatted && postTagsFormatted.map((tag) => `/tag/${tag}`);
    this.setState({
      tagsAsPaths: tagsAsPaths,
    });
  };

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

  // getBlogPostsGooglePrior = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/${this.state.searchTerm}`)
  //     .then((response) => {
  //       this.setState(
  //         {
  //           blogPosts: response.data.items,
  //           searchSubmitted: false,
  //         },
  //         () => {
  //           console.log(this.state);
  //         }
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    const allPosts = this.state.allPosts;
    const postTags2DArr = allPosts && allPosts.map((post) => post.tags);
    const postTags1DArr = [].concat(...(postTags2DArr && postTags2DArr));
    const postTagsFormatted =
      postTags1DArr &&
      postTags1DArr.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());
    const tagsAsPaths =
      postTagsFormatted && postTagsFormatted.map((tag) => `/tag/${tag}`);

    // const allTags = this.state.tagsAsPaths;

    // const postSkillTags = allPosts.map((post) => post.skillTags);
    // const postStackTags = allPosts.map((post) => post.stackTags);

    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact>
              <HomePage allPosts={this.state.allPosts} />
            </Route>
            <Route path='/blog' exact>
              <BlogPage allPosts={this.state.allPosts} />
            </Route>
            <Route path={tagsAsPaths} exact>
              <TagPage allPosts={this.state.allPosts} />
            </Route>
            <Route path='/scrollmate' exact>
              <PostPage allPosts={this.state.allPosts} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
