import React, { Component } from "react";
import { clientID, clientSecret } from "./components/Credintials";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Repo from "./pages/repos/Repo";
import Followers from "./pages/followers/Followers";
import Following from "./pages/following/Following";
import Overview from "./pages/overview/Overview";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "wapborhan",
      overview: "TG9hZGluZy4uLg==",
      profile: "",
      repos: null,
      followers: null,
      following: null,
    };
  }

  componentDidMount() {
    // Profile Data
    axios
      .get(
        `https://api.github.com/repos/${this.state.username}/${this.state.username}/contents/README.md?clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          overview: res.data.content,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Profile Data
    axios
      .get(
        `https://api.github.com/users/${this.state.username}?clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          profile: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Repos Data
    axios
      .get(
        `https://api.github.com/users/${this.state.username}/repos?page=1&per_page=100&clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          repos: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Followers Data
    axios
      .get(
        `https://api.github.com/users/${this.state.username}/followers?page=1&per_page=100&clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Following Data
    axios
      .get(
        `https://api.github.com/users/${this.state.username}/following?page=1&per_page=100&clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          following: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    // console.log(this.state.overview);
    return (
      <div>
        <Banner profile={this.state.profile} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Overview overview={this.state.overview} />}
          />
          <Route
            path="overview"
            exact
            element={<Overview overview={this.state.overview} />}
          />
          <Route
            path="repo"
            exact
            element={<Repo repos={this.state.repos} />}
          />
          <Route
            path="followers"
            exact
            element={<Followers followers={this.state.followers} />}
          />
          <Route
            path="following"
            exact
            element={<Following following={this.state.following} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}
