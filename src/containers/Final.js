import React, { Component } from 'react';
import getApiData from '../services/getApiData';
import HeyArnold from '../components/characters/HeyArnold';

class Final extends Component {
  state = {
    characters: [],
    oneChar: ''
  }

  componentDidMount(){
    this.fetch();
  }

  fetch(){
    getApiData()
      .then(characters => this.setState({ characters }));
  }

  handleClick = ({ target }) => {
    this.setState({ oneChar: target.value });
  }

  render(){
    return (
      <>
        <HeyArnold onClick={this.handleClick} characters={this.state.characters} />
      </>
    );
  }
}

export default Final;
