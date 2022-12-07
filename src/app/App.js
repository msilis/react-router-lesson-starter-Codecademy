import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* Add Routes here! */}
        <Switch>
          <Route path="/articles/:title">
            <Article />
          </Route>
          <Route path="/authors/:name">
            <Author />
          </Route>

          {/* About */}
          <Route path="/about">
            <About />
          </Route>

          {/* Sign Up */}
          <Route path="/sign-up">
            <SignUp />
          </Route>

          {/* Articles */}
          <Route path="/articles">
            <Articles />
          </Route>

          {/* Categories */}
          <Route path="/categories">
            <Categories />
          </Route>

          {/* Profile     */}
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
