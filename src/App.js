import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Repo from "./pages/repos/Repo";
import Followers from "./pages/followers/Followers";
import Following from "./pages/following/Following";
import Overview from "./pages/overview/Overview";
import Starred from "./pages/starred/Starred";
import RightDemo from "./components/RightDemo";
import { axiosInstance } from "./util/axiosInstance";

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
      starred: null,
    };
  }

  componentDidMount() {
    // Overview Data
    axiosInstance
      .get(
        `/repos/${this.state.username}/${this.state.username}/contents/README.md`,
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
    axiosInstance
      .get(`/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          profile: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Repos Data

    const getData = async () => {
      try {
        const { data: repos1 } = await axiosInstance(
          `/users/${this.state.username}/repos?page=1&per_page=100&sort=created&type=owner`,
        );
        const { data: repos2 } = await axiosInstance(
          `/users/${this.state.username}/repos?page=2&per_page=100&sort=created&type=owner`,
        );
        const { data: repos3 } = await axiosInstance(
          `/users/${this.state.username}/repos?page=3&per_page=100&sort=created&type=owner`,
        );
        let repos = [...repos1, ...repos2, ...repos3];

        this.setState({ repos });
      } catch (err) {
        this.setState({ error: "Somthing went wrong!" });
      }
    };

    getData();

    // axios
    //   .get(
    //     `https://api.github.com/users/${this.state.username}/repos?page=1&per_page=100&clientId=${clientID}&clientSecret=${clientSecret}`
    //   )
    //   .then((res) => {
    //     this.setState({
    //       repos: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // Followers Data
    axiosInstance
      .get(`/users/${this.state.username}/followers?page=1&per_page=100`)
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Following Data
    axiosInstance
      .get(`/users/${this.state.username}/following?page=1&per_page=100`)
      .then((res) => {
        this.setState({
          following: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Stared Data
    axiosInstance
      .get(`/users/${this.state.username}/starred?page=1&per_page=100`)
      .then((res) => {
        this.setState({
          starred: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
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
          <Route
            path="starred"
            exact
            element={<Starred starred={this.state.starred} />}
          />
        </Routes>
        <RightDemo />
        <Footer />
      </div>
    );
  }
}
