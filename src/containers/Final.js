import React, { Component } from 'react';
import Header from '../components/header/Header';
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
        <Header />
        <HeyArnold onClick={this.handleClick} characters={this.state.characters} />
      </>
    );
  }
}

export default Final;
