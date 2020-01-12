import React from 'react';

class RandomUser extends React.Component {
  state = {
    indexOfUserForShowing: 0,
    nameUserForShowing: "Want to see?",
    surnameUserForShowing: 'Just wait!',
  }

  componentDidMount() {
    this.myInterval = setInterval(this.chooseRandomIndex, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  chooseRandomIndex = () => {
    this.setState(() => {
      const newIndex = Math.floor(Math.random() * (this.props.users.length + 1));

      return {
        indexOfUserForShowing: newIndex,
      }
    },
      () => {
        this.setState({
          nameUserForShowing: this.props.users[this.state.indexOfUserForShowing].name,
          surnameUserForShowing: this.props.users[this.state.indexOfUserForShowing].surname,
        })
      })
  }

  render() {
    console.log(this.state.indexOfUserForShowing);
    return (
      <div className="random-user">
        Random user every 8 seconds!
        <p>{this.state.nameUserForShowing} {this.state.surnameUserForShowing}</p>
      </div>
    )
  }
}

export default RandomUser;