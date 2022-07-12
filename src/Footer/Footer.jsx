import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer text-center">
          <div className="container">
            <div className="row">


              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  2215 John Daniel Drive
                  <br />
                  Clark, MO 65243
                </p>
              </div>


              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fa-brands fa-facebook-f"></i>  </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fa-brands fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"> <i className="fa-brands fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fa-brands fa-dribbble"></i></a>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">
                  Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
      </>
    )
  }
}
