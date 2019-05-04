import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json';
import ImageCard from './components/Images/images';
import Wrapper from './components/Wrapper';

class App extends React.Component {
  state = {
  
    characters:characters


  }
  handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, id]
      });
    }
    this.setState({
      characters: characters.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  }
  render(){

    return (
     <Wrapper>
       <h1> HERE WE GO!!</h1>
       <ImageCard name="card" image=""/>
     </Wrapper>
       
           );
  }
 
}



export default App;
