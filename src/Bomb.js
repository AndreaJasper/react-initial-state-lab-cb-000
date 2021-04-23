import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.count
    }
  }

  render() {
    return(
      <div>
        <h1>Something</h1>
      </div>
    );
  }
}

export default Bomb;