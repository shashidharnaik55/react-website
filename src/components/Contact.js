import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="page overlay">
        <div className="container">
          <div className="content cover text-center">
            <div className="heading">
              <h2 className="mt-0 mb-4">Getting in touch.</h2>
              <div className="border"></div>
              <p className="mt-4 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
              <div
                className="col-sm-4 animated hiding"
                data-animation="fadeInRight"
                data-delay="600"
              >
                <i className="fa fa-map-marker fa-3x"></i>
                <a href="#">Jayanagar , Bangalore </a>
              </div>
              <div
                className="col-sm-4 animated hiding"
                data-animation="fadeInDown"
                data-delay="300"
              >
                <i className="fa fa-phone fa-3x"></i>
                <a href="tel:9876543210">9443658912</a>
              </div>
              <div
                className="col-sm-4 animated hiding"
                data-animation="fadeInLeft"
                data-delay="600"
              >
                <i className="fa fa-envelope fa-3x"></i>
                <a href="mailto:john.doe@mail.com">john.cooper@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
