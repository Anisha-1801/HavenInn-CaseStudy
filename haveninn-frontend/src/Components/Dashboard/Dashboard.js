import React, { Component } from 'react'
import SearchRooms from '../Receptionist/SearchRooms'
import './Dashboard.css'
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="">
          <a className='btn btn-warning' href="/Reservation">
            Reservation
          </a>


        </div>
        <SearchRooms />
      </div>
    )
  }
}

export default Dashboard