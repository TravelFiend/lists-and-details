import React, { Component } from 'react';
import Header from '../header/Header';
import getApiData from '../../services/getApiData';
import HeyArnoldList from './HeyArnoldList';
import Paging from '../paging/Paging';

class HeyArnold extends Component {
  state = {
    characters: [],
    oneChar: '',
    pageNum: 1
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

  handleBackClick() {
    if(this.state.pageNum === 1){
      return;
    }
    this.setState((prevState) => ({ pageNum: prevState.pageNum - 1 }));
  }

  handleForwardClick() {
    if(this.state.pageNum === 11){
      return;
    }
    this.setState((prevState) => ({ pageNum: prevState.pageNum + 1 }));
  }

  render(){
    return (
      <main>
        <Header />
        <Paging pageNum={this.state.pageNum} onBackClick={this.handleBackClick} onForwardClick={this.handleForwardClick} />
        <HeyArnoldList onClick={this.handleClick} characters={this.state.characters} />
      </main>
    );
  }
}

export default HeyArnold;
