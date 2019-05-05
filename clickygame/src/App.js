import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json';
import ImageCard from './components/Images/images';
import Wrapper from './components/Wrapper';
import Table from './components/Table';
import Header from './components/Header'

class App extends React.Component {
  state = {
      characters:characters,
      score:0,
      clickedImages:[],
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
      <Jumbotron>
       {this.state.score}
        </Jumbotron> 
      
      <Table>
        
       {this.state.characters.map(f=>(
         <ImageCard 
          name={f.name}
          image={f.image}
          occupation={f.occupation}
          totalClick={() => this.handleShuffle(f.id)}
           />
       ))}
         </Table>
       
     </Wrapper>
       
           );
  }
 
}



export default App;
