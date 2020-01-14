import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Profiles from './components/Profiles';
import UserPage from './components/UserPage';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    profiles: [],
    currUser: '',
    currUserRoute: ` `,
    currUserRepos: [],
    currUserProfile: {}
  }

  showRes = (name) => {
    axios.get(`https://api.github.com/search/users?q=${name}`)
      .then(res => this.setState({ profiles: res.data.items }));
  }

  goTo = (user) => {
    const route = process.env.PUBLIC_URL + `/users/${user}`;
    console.log(route);
    this.setState({ currUser: `${user}`, currUserRoute: route });
    //repos [array]
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(res => this.setState({ currUserRepos: res.data }));
    //user {object}
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => this.setState({ currUserProfile: res.data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path={process.env.PUBLIC_URL + '/'} render={(props) => (
            <React.Fragment>
              <SearchBar showRes={this.showRes} />
              <Profiles profiles={this.state.profiles} goTo={this.goTo} />
            </React.Fragment>
          )} />
          <Route
            path={this.state.currUserRoute}
            render={(props) => <UserPage {...props} repos={this.state.currUserRepos} user={this.state.currUserProfile} />}
          />
        </div>
      </Router>
    )
  }
}

export default App;