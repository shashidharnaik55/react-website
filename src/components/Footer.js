import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 animated hiding"
              data-animation="fadeInUp"
            >
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a
                    className="facebook"
                    href="http://www.facebook.com"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="twitter"
                    href="http://www.twitter.com"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="google-plus"
                    href="http://www.plus.google.com"
                    title="Google+"
                  >
                    <i className="fab fa-google-plus fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="dribbble"
                    href="http://www.linkedin.com"
                    title="Dribbble"
                  >
                    <i className="fab fa-dribbble fa-2x"></i>
                  </a>
                </li>
              </ul>
              <p className="copyright">Created by Shashidhar</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
