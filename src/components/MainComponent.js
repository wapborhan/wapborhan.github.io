import React, { Component } from "react";
import { clientID, clientSecret } from "./Credintials";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import Body from "./pages/repos/Body";
import Footer from "./Footer";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "wapborhan",
      profile: "",
      repos: null,
    };
  }

  componentDidMount() {
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

    // Profile Repos Data
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
  }

  render() {
    return (
      <div>
        <Banner profile={this.state.profile} />
        <Routes>
          <Route
            path="/"
            element={
              this.state.repos ? <Body repos={this.state.repos} /> : null
            }
          />
          <Route path="*" element={<MainComponent />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}
