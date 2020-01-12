import React from 'react';
import { connect } from 'react-redux';
import { saveUsers } from './redux/actions/actions';
import './styles/App.scss';

class App extends React.Component {
  componentDidMount() {
    this.fetchUsers();
  };

  fetchUsers = async() => {
    try {
      const response = await fetch('users.json');
      const json = await response.json();
      this.props.saveUsers(json.users);
    } catch(e) {
      console.error(e);
    }
  }
  
  render() {
    return (
      <div className="App">
        good
      </div>
    );
  }
}

export default connect(({
  users,
}) => ({
  users,
}), {
  saveUsers,
})(App);
