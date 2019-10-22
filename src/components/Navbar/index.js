import React,{Component} from 'react';
import './style.css';


class Navbar extends Component {
render(){
  return(
    <nav className="navbar"><ul><li className="brand"><a href="/">Clicky Game</a></li><li>{this.props.alertMessage}</li><li>Score: {this.props.score} | Top Score: {this.props.topScore}</li></ul></nav>
  )
}
}

export default Navbar;
