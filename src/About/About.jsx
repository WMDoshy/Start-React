import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className='aboutMain py-5'>
        <div className='container'>
        <div>
        <h1>ABOUT</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='aboutContact col-md-6 p-5'>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className='aboutContact col-md-6 p-5'>
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
