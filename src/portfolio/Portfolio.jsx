import React, { Component } from 'react'
import './portfolio.css'
import cabin from '../Image/cabin.png'
import cake from '../Image/cake.png'
import circus from '../Image/circus.png'
import game from '../Image/game.png'
import safe from '../Image/safe.png'
import submarine from '../Image/submarine.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='py-5'>
        <div className=' differentColorText'>
        <h1>PORTFOLIO</h1>
        <div>
        <i className="fa-solid fa-star fs-3"></i>
        </div>
        </div>
        <div className=' container'>
            <div className='row gy-3'>
                <div className='portfolioContent col-md-4'>
                        <div className='pImage position-relative'>
                        <img src={cabin}  className='w-100 rounded ' alt="" />
                        <div className='portfolioItem position-absolute top-0 start-0 bottom-0 end-0  rounded d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                        </div>
                </div>
                <div className='portfolioContent col-md-4'>
                        <div className='pImage position-relative'>
                        <img src={cake}  className='w-100 rounded ' alt="" />
                        <div className='portfolioItem position-absolute top-0 start-0 bottom-0 end-0  rounded d-flex justify-content-center align-items-center'>
                        <i className="fa-solid fa-plus"></i>
                        </div>
                        </div>
                </div>
                <div className='portfolioContent col-md-4'>
                        <div className='pImage position-relative'>
                        <img src={circus}  className='w-100 rounded ' alt="" />
                        <div className='portfolioItem position-absolute top-0 start-0 bottom-0 end-0  rounded d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                        </div>
                </div>
                <div className='portfolioContent col-md-4'>
                        <div className='pImage position-relative'>
                        <img src={game}  className='w-100 rounded ' alt="" />
                        <div className='portfolioItem position-absolute top-0 start-0 bottom-0 end-0  rounded d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                        </div>
                </div>
                <div className='portfolioContent col-md-4'>
                        <div className='pImage position-relative'>
                        <img src={safe}  className='w-100 rounded ' alt="" />
                        <div className='portfolioItem position-absolute top-0 start-0 bottom-0 end-0  rounded d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                        </div>
                </div>
                <div className='portfolioContent col-md-4'>
                        <div className='pImage position-relative'>
                        <img src={submarine}  className='w-100 rounded ' alt="" />
                        <div className='portfolioItem position-absolute top-0 start-0 bottom-0 end-0  rounded d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                        </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
