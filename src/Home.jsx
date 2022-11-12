import React, { Component } from 'react'
import './Home.css';
import avatar from './Image/avataaars.svg'


export default class Home extends Component {
  render() {
    return (
      <div className='homeMain d-flex justify-content-center align-items-center'>
        <div>
            <div className='d-flex justify-content-center'>
            <div className='imageDiv'>
                <img  src={avatar} alt="" />
            </div>
            </div>
            <div className='homeContent py-3'>
                <h1>START REACT</h1>
                <div className='divider-custom-line-light w-100 d-flex justify-content-center align-items-center'>
                    <div className='divider-custom-line'></div>
                    <div>
                    <i className="fa-solid fa-star fs-3"></i>
                    </div>
                    <div className='divider-custom-line'></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
      </div>
    )
  }
}
