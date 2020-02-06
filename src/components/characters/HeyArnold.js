import React, { Component } from 'react';
import Header from '../header/Header';
import getApiData from '../../services/getApiData';
import HeyArnoldList from './HeyArnoldList';

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
        <HeyArnoldList onClick={this.handleClick} characters={this.state.characters} />
      </>
    );
  }
}

export default Final;
