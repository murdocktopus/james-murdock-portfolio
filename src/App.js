import './App.css';
import './styles/_global.scss';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';

class App extends Component {
  state = {
    allPosts: [],
    heroPosts: [],
    featuredPosts: [],
    featuredCategories: ['portfolio', 'blog'],
    searchTerm: '',
    searchSubmitted: false,
    selectedBlogPost: {},
  };

  componentDidMount() {
    // this.getBlogPostsGooglePrior();
    this.getPosts();
  }

  componentDidUpdate() {
    console.log('this.state.allPosts:', this.state.allPosts);
  }

  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blog-posts`)
      .then((response) => {
        console.log('All Posts in API', response.data);
        let allPosts = response.data;
        this.setState({
          allPosts: allPosts,
        });
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
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
