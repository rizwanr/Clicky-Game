import React,{Component} from 'react';
import SuperHeroCard from './components/SuperHeroCard';
import Header from './components/Header'
import superheroes from './superheroes.json';
import Navbar from './components/Navbar'

import './App.css';

class App extends Component{
  state={
    superheroes,
    pickedChars: [],
    topScore: 0,
    alertMessage: "CLICK AN IMAGE TO BEGIN"


  }

  handlePicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    console.log(name)
    this.shuffleCharacters()
    this.checkGuess(name, this.updateTopScore)
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedChars.includes(name)) {
      newState.alertMessage = `YOU GUESSES INCORRECTlY!`
      newState.pickedChars = []
      this.setState(newState)
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = `YOU GUESSED CORRECTLY!`
      this.setState( newState)
    }
    //pass the newState ton the alertWinner
    cb(newState, this.alertWinner)
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedChars.length > newState.topScore) {
      newState.topScore++
      this.setState( newState)
    }
    cb(newState)
  }

  alertWinner = (newState) => {
    if (newState.pickedChars.length === 12) {
      newState.alertMessage = "CHAMPION!";
      newState.pickedChars = [];
      this.setState( newState)
    }
  }

  shuffleCharacters = () => {
    this.setState(this.shuffleArray(this.state.superheroes))
  }

  shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


  render(){
  return (
  
    <div>
      <Navbar score={this.state.pickedChars.length} topScore={this.state.topScore} alertMessage={this.state.alertMessage} />
      <Header/>
      <div class="container">
     
      {this.state.superheroes.map((superhero) => (
        <SuperHeroCard name={superhero.name} id={superhero.id} key={superhero.id}  image={superhero.image} handlePicked={this.handlePicked} />
      ))}
      </div>

    </div>
  );
}
}

export default App;
