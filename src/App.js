import './App.css';
import './styles/_global.scss';
import { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import BlogFeedPage from './pages/BlogFeedPage/BlogFeedPage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
import TagFeedPage from './pages/TagFeedPage/TagFeedPage';
import PortfolioFeedPage from './pages/PortfolioFeedPage/PortfolioFeedPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import MenuModal from './components/MenuModal/MenuModal';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [heroPosts, setHeroPosts] = useState([]);
  const [tagsAsPaths, setTagsAsPaths] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [openMenuModal, setOpenMenuModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blog-posts`)
      .then((response) => {
        setAllPosts(response.data);
        setHeroPosts([
          response.data.find((posts) => posts.hero === 1),
          response.data.find((posts) => posts.hero === 2),
          response.data.find((posts) => posts.hero === 3),
          response.data.find((posts) => posts.hero === 1),
        ]);
        const postTags2DArr = response.data.map((post) => post.tags);
        const skillTags2DArr = response.data.map((post) => post.skillTags);
        const stackTags2DArr = response.data.map((post) => post.stackTags);
        const allTags2DArr = postTags2DArr.concat(
          skillTags2DArr,
          stackTags2DArr
        );
        const allTags1DArr = [].concat(...(allTags2DArr && allTags2DArr));
        const postTagsFormatted =
          allTags1DArr &&
          allTags1DArr.map((tag) => tag.replace(/\s+/g, '-').toLowerCase());
        setAllTags(postTagsFormatted);
        const tagsAsPaths =
          postTagsFormatted && postTagsFormatted.map((tag) => `/tag/${tag}`);
        setTagsAsPaths(tagsAsPaths);
        const foundPost = response.data.find(
          (post) => post.name === window.location.pathname.slice(6)
        );
        setSelectedPost(foundPost);
      })
      .catch((err) => {
        console.log('error 1 catch', err);
      });
  }, []);

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

  return (
    <div className='App'>
      <Router>
        <Header
          onMenuBtnClick={() => {
            openMenuModal ? setOpenMenuModal(false) : setOpenMenuModal(true);
          }}
        />
        {openMenuModal && (
          <MenuModal
            allTags={allTags}
            postTagsFormatted={postTagsFormatted}
            allTags1DArr={allTags1DArr}
            postTags1DArr={postTags1DArr}
          />
        )}
        <Routes>
          <Route
            path='/'
            element={<HomePage allPosts={allPosts} heroPosts={heroPosts} />}
          />
          <Route path='/blog' element={<BlogFeedPage allPosts={allPosts} />} />
          <Route
            path='/portfolio'
            element={<PortfolioFeedPage allPosts={allPosts} />}
          />
          {postTagsFormatted &&
            postTagsFormatted.map((tag) => (
              <Route
                key={tag}
                path={`/tag/${tag}`}
                element={
                  <TagFeedPage
                    allPosts={allPosts}
                    tagsAsPaths={tagsAsPaths}
                    allTags={allTags}
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
                    selectedPost={selectedPost}
                    // getSetPost={this.getSetPost}
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

export default App;
