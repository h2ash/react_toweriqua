import React from 'react';
import { connect } from 'react-redux';
import { saveUsers } from './redux/actions/actions';
import './styles/App.scss';
import TableOfUsers from './components/TableOfUsers';
import PaginationButtons from './components/Pagination/PaginationButtons';

class App extends React.Component {
  state = {
    currentPage: 1,
    pages: 1,
    arrOfPages: [1],
  }

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
    } finally {
      this.sumOfPages();
    }
  }

  sumOfPages = () => {
    this.setState({
      pages: Math.ceil(this.props.users.length / 5),
    });

    this.createArrayOfPages();
  }

  createArrayOfPages = () => {
    this.setState(prevState => {
      const arr = [];

      for (let i = 1; i <= prevState.pages; i++) {
        arr.push(i);
      };

      return {
        arrOfPages: arr,
      }
    })
  }

  chooseCurrentPage = (value) => {
    this.setState({
      currentPage: value,
    })
  }
  
  render() {
    const { currentPage, pages, arrOfPages } = this.state;
    const { users } = this.props;
    return (
      <div className="app">
        <main className='wrapper__main'>
          Text from App
          <TableOfUsers
            users={users}
            currentPage={currentPage}
          />
          <PaginationButtons
            chooseCurrentPage={this.chooseCurrentPage}
            currentPage={currentPage}
            pages={pages}
            arrOfPages={arrOfPages}
          />
        </main>
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
