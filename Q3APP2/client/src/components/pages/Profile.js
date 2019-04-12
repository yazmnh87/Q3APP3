import React, { Component } from 'react'
import Navbar from '../Navbar'

export default class Profile extends Component {
    state = {
        phone: "",
        school: "",
        careerInterests: [],
        hobbies: [],
        team: "",
        mentor: "",
        fburl: ""
    }
  render() {
    return (
      <>
        <Navbar />
        <div className="d-flex justify-content-center">
        <div className="form-container">
        <form className="form-group">
            <label>Career Interests</label>
            <input className="form-control" name="careerInterests" value={this.state.careerInterests} onChange={this.onChange}></input>
            <label>Hobbies</label>
            <input className="form-control" name="hobbies" value={this.state.hobbies} onChange={this.onChange}></input>
            <label>School</label>
            <input className="form-control" name="school" value={this.state.school} onChange={this.onChange}></input>
            <label>Phone Number</label>
            <input className="form-control" name="phone" value={this.state.phone} onChange={this.onChange}></input>
            <label>Q3 Team</label>
            <input className="form-control" name="team" value={this.state.team} onChange={this.onChange}></input>
            <label>Mentor</label>
            <input className="form-control" name="mentor" value={this.state.mentor} onChange={this.onChange}></input>
            <i className="fab fa-facebook fa-2x"><label></label></i>
            <input className="form-control" name="fburl" value={this.state.fburl} onChange={this.onChange}></input>
            <button className="btn btn-light btn-block">Submit</button>
        </form>
        </div>
        </div>
      </>
    )
  }
}
