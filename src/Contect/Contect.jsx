import React, { Component } from 'react'
import './contect.css'

// function showName() {
//   return alert("Working")
//   const inputName = document.getElementById("inputName")
//   inputName
// }
export default class Contect extends Component {

   showName() {
    return alert("Working")
    // const inputName = document.getElementById("inputName")
    
    // inputName.event.currentTarget.classList.remove("d-none")
    // console.log(this.state.inputName);
  }
  render() {
    return (
      <div>
        <div className=' differentColorText'>
            <h1>CONTECT US</h1>
            <div>
              <i className="fa-solid fa-star fs-3"></i>
            </div>
            <div className='py-3 container'>
              <div className='contect w-100 d-flex justify-content-center align-items-center flex-wrap py-2'>
                <div id='inputName' className=' d-none w-100 d-flex justify-content-start'>
                  <div className='w-50'>
                  <p className='mx-5' >Name</p>
                </div>
                </div>
              <input type="text" onKeyUp={this.showName} placeholder='Name' className='form-control w-50' />
              </div>
              <div className='contect w-100 d-flex justify-content-center align-items-center flex-wrap py-2'>
                <div id='inputName' className=' d-none w-100 d-flex justify-content-start'>
                  <div className='w-50'>
                  <p className='mx-5' >Name</p>
                </div>
                </div>
              <input type="text" onKeyUp={this.showName} placeholder='Email Address' className='form-control w-50' />
              </div>
              <div className='contect w-100 d-flex justify-content-center align-items-center flex-wrap py-2'>
                <div id='inputName' className=' d-none w-100 d-flex justify-content-start'>
                  <div className='w-50'>
                  <p className='mx-5' >Name</p>
                </div>
                </div>
              <input type="text" onKeyUp={this.showName} placeholder='Phone Number' className='form-control w-50' />
              </div>
              <div className='contect w-100 d-flex justify-content-center align-items-center flex-wrap py-2'>
                <div id='inputName' className=' d-none w-100 d-flex justify-content-start'>
                  <div className='w-50'>
                  <p className='mx-5' >Name</p>
                </div>
                </div>
              <input type="text" onKeyUp={this.showName} placeholder='Message' className='form-control w-50' />
              </div>
            </div>
        </div>
      </div>
    )
  }
}
