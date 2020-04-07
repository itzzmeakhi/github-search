import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

import UserSearch from './user-search/user-search.component';
import User from './user/user.component';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      searchUser : "",
      userData : "",
      userFollowers : [],
      isDataLoading : false
    }
  }

  onSearchUser = (event) => {
    //console.log(event.keyCode);
    if(event.keyCode === 13) {
      //console.log(event.target.value);
      this.setState({
        searchUser : event.target.value,
        isDataLoading : true
      }, () => {
        fetch(`https://api.github.com/users/${this.state.searchUser}`)
          .then(userResponse => userResponse.json())
          .then(userData => {
            //console.log(`https://api.github.com/users/${this.state.searchUser}/followers`);
            fetch(`https://api.github.com/users/${this.state.searchUser}/followers`)
              .then(followersResponse => followersResponse.json())
              .then(followersData => {
                this.setState({
                  userData : userData,
                  userFollowers : followersData,
                  isDataLoading : false
                }, () => {
                  console.log(this.state);
                })
              })
          })
      })
      event.target.value = null;
    }
  }

  render() {
    return(
      <div className = "container-fluid App">
        <div className = "row header-row">
          <div className = "offset-md-3 col-md-6">
            <h4 className = "display-4">Github User Search</h4>
          </div>
        </div>
        <hr></hr>
        <div className = "row">
          <div className = "offset-md-4 col-md-4">
            <UserSearch changed = {this.onSearchUser}></UserSearch>
          </div>
        </div>
        <div className = "row">
          <div className = "offset-md-2 col-md-8">
            {this.state.userData ?
              <User user = {this.state.userData}></User>
              : null
            }
            {
              this.state.isDataLoading ?
                <i className = "fa fa-spinner fa-spin"></i>
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
