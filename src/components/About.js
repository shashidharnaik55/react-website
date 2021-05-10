import React, { Component } from 'react'
import myStaff1 from '../images/staff1.jpg'
import myStaff2 from '../images/staff2.jpg'
import myStaff3 from '../images/staff3.jpg'
import myStaff4 from '../images/staff4.jpg'

class About extends Component {
  render() {
    return (
      <section id="about" className="page">
        <div className="container">
          <div className="content text-center">
            <div className="heading">
              <h2 className="mt-0 mb-4">About Us.</h2>
              <div className="border"></div>
              <p className="mt-4 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
              </p>
            </div>
            <div className="row">
              <div
                className="col-md-3 col-sm-6 col-xs-12 teammate animated hiding"
                data-animation="fadeInLeft"
                data-delay="600"
              >
                <div className="profile-photo">
                  <img className="img-fluid" src={myStaff1} alt="" />
                </div>
                <div className="bio mt-4">
                  <h5 className="mb-1">John Cooper</h5>
                  <p>Web Developer</p>
                  <div className="border mt-4 mb-4"></div>
                  <p>
                    Lorem ipsum dolor sit, consetetur sadipscing elitr, diam
                    nonumy eirmod tempor invidunt ut labore.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="http://www.facebook.com" title="Facebook">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://www.twitter.com" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://www.linkedin.com" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://www.github.com" title="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 teammate animated hiding"
                data-animation="fadeInUp"
                data-delay="300"
              >
                <div className="profile-photo">
                  <img className="img-fluid" src={myStaff3} alt="" />
                </div>
                <div className="bio mt-4">
                  <h5 className="mb-1">Sana S</h5>
                  <p>Designer</p>
                  <div className="border mt-4 mb-4"></div>
                  <p>
                    Lorem ipsum dolor sit, consetetur sadipscing elitr, diam
                    nonumy eirmod tempor invidunt ut labore.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="http://www.dribbble.com" title="Dribbble">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://www.pinterest.com" title="Pinterest">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://www.instagram.com" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 teammate animated hiding"
                data-animation="fadeInUp"
                data-delay="300"
              >
                <div className="profile-photo">
                  <img className="img-fluid" src={myStaff2} alt="" />
                </div>
                <div className="bio mt-4">
                  <h5 className="mb-1">Mandeep Singh</h5>
                  <p>Mobile Developer</p>
                  <div className="border mt-4 mb-4"></div>
                  <p>
                    Lorem ipsum dolor sit, consetetur sadipscing elitr, diam
                    nonumy eirmod tempor invidunt ut labore.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="http://www.twitter.com" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="http://developer.android.com/index.html"
                        title="Android Developers"
                      >
                        <i className="fab fa-android"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="http://www.stackoverflow.com"
                        title="Stack Overflow"
                      >
                        <i className="fab fa-stack-overflow"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 teammate animated hiding"
                data-animation="fadeInRight"
                data-delay="600"
              >
                <div className="profile-photo">
                  <img className="img-fluid" src={myStaff4} alt="" />
                </div>
                <div className="bio mt-4">
                  <h5 className="mb-1">Ankita Sharma</h5>
                  <p>QA Engineer</p>
                  <div className="border mt-4 mb-4"></div>
                  <p>
                    Lorem ipsum dolor sit, consetetur sadipscing elitr, diam
                    nonumy eirmod tempor invidunt ut labore.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="http://www.plus.google.com" title="Google+">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://www.trello.com" title="Trello">
                        <i className="fab fa-trello"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="mailto:john.doe@mail.com" title="Email">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
