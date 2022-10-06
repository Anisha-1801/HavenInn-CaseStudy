import React, { Component } from "react";
import axios from "axios";
import Variables from "../../Variables/Variables";
import "./Reservation.css";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Reservations: [],
    };
  }

  componentDidMount() {
    axios
      .get(Variables.api + "Reservations", {
        headers: { Authorization: `Bearer ${Variables.token}` },
      })
      .then((response) => response.data)
      .then((res) => {
        this.setState({
          Reservations: res,
        });
      })
      .catch((error) => console.log(error));
  }
  // eslint-disable-next-line
  render() {
    const { Reservations } = this.state;
    return (
      <>
        {/* <table>
          <thead>
            <tr>
              <th>ReservationId</th>
              <th>GuestId</th>
              <th>UserId</th>
              <th>RoomId</th>
              <th>ServiceId</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Booking Time</th>
              <th>No. of Nights</th>
              <th>Adults</th>
              <th>Children</th>
            </tr>
          </thead>
          <tbody>
            {Reservations.map((r) => (
              <tr key={r.ReservationId}>
                <td>{r.ReservationId}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {Reservations.map((r) => (
          <div className="card reservation-container" key={r.ReservationId}>
            <div className="row no-gutters">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <h5 className="card-title">
                  Reservation Id : {r.ReservationId}
                </h5>
                <p className="para-text">
                  <b>Guest: </b>
                  {r.Guest.Name}
                  <br />
                  <b>Email Address : </b>
                  {r.Guest.Email}
                  <br />
                  <b>Adults : </b> {r.NumberOfAdults} &nbsp;&nbsp;
                  <b>Children: </b> {r.NumberOfChildren}
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <p className="para-text">
                  <b>Room Number : </b> {r.Room.RoomId}
                  <br />
                  <b>Service: </b> {r.Service.ServiceName} &nbsp;  
                  <br />
                  <b>Nights : </b> {r.NoOfNights}
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <p className="para-text">
                  <b>Check-In : </b> {new Date(r.CheckIn).toLocaleString()}
                  <br />
                  <b>Check-Out : </b> {new Date(r.CheckOut).toLocaleString()}
                  <br />
                  {/* <b>Nights : </b> {r.NoOfNights}
                  <br /> */}
                  <b>Booking Time : </b> {r.BookingTime}
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <button className="btn btn-outline-dark">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button className="btn btn-outline-dark">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
               
                </button>
                <button className="btn btn-outline-dark">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Reservation;
