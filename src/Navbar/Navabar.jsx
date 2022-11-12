import React, { Component } from 'react'
import './navbar.css'

export default class Navabar extends Component {
  render() {
    return (
      <div className=' fixed-top'>
        <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand">START REACT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">CONTACT</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
