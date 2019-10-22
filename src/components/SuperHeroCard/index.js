import React,{Component} from 'react'
import './style.css'


class SuperHeroCard extends Component{
  render(){
    return(

      <div className ="SuperHeroCard">
        <div className="img-container">
          <img alt="superhero" id={this.props.id} src={this.props.image} name={this.props.name} onClick={this.props.handlePicked} />
      </div>
     </div>
   

   
    )
  }
}




export default SuperHeroCard;