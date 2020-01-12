import React from 'react';

class RandomUserFromRedux extends React.Component {
  state = {
    indexOfUserForShowing: 0,
    nameUserForShowing: this.props.users[0],
    surnameUserForShowing: this.props.users[0],
  }

  componentDidMount() {
    setInterval(this.chooseRandomIndex, 8000);
  }

  chooseRandomIndex = () => {
    this.setState(prevState => {
      const newIndex = Math.floor(Math.random() * 20);

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
      <div>
        Random user every 8 seconds:
        <p>{this.state.nameUserForShowing} {this.state.surnameUserForShowing}</p>
      </div>
    )
  }
}

export default RandomUserFromRedux;