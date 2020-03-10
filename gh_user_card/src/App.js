import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/wildcard329')
      .then(res => {
        console.log(res)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))

      axios
        .get('https://api.github.com/users/wildcard329/followers')
        .then(res => {
          console.log(res)
          this.setState({
            followers: res.data.login
          })
        })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <h3>{this.state.user.login}</h3>
        <img src={this.state.user.avatar_url} />
        <p>Followers: {this.state.user.followers}</p>
        <p>Following: {this.state.user.following}</p>
      </div>
    );
  }
}

export default App;



// Step one: class app extends react.component
// Step two: put return inside of render()
// Step three: set up state
// Step four: set up componentdidmount
// Step five: use axios to connect to api, log results
// Step six: set up state and return based on console results
// note for step six: instead of directly using users.var, 
// the variable needs to follow this.state
