import React, { Component } from 'react'
import './StartReact.css'
export default class StartReact extends Component {
  render() {
    return (
      <>
      <header className="masthead text-white text-center">
            <div className="container d-flex align-items-center flex-column"> 
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt=""/> 
                <h1 className="masthead-heading text-uppercase mb-0">Start React</h1> 
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"> <i className="fa-solid fa-star text-white"></i> </div>
                    <div className="divider-custom-line"></div>
                </div> 
                <p className="masthead-subheading fw-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
      </> 
    )
  }
}
