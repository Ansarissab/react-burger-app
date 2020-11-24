import React from 'react'
import '../assets/css/signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="signup-page container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="form-group mt-1">
          <Link to="/login" className="btn btn-success">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
