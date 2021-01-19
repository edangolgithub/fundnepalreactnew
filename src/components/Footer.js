import React, { Component } from 'react'
import '../App.css';

export class Footer extends Component {
    

    render() {
        return (
            <div>
                <footer className="footer py-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left">Copyright © www.fundnepal.com 2021</div>
                <div className="col-lg-4 my-3 my-lg-0">
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
                </div>
                <div className="col-lg-4 text-lg-right">
                  <a className="mr-3" href="#!">Privacy  dgdfg Policy</a>
                  <a href="#!">Terms of Use</a>
                </div>
              </div>
            </div>
          </footer>
            </div>
        )
    }
}

export default Footer
