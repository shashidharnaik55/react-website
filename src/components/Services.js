import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
      <section id="services" className="page">
        <div className="container">
          <div className="content text-center">
            <div className="heading">
              <h2 className="mt-0 mb-4">What we love doing.</h2>
              <div className="border"></div>
              <p className="mt-4 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                alias enim placeat earum quos ab.
              </p>
            </div>
            <div className="row">
              <div
                className="col-sm-4 service animated hiding"
                data-animation="fadeInUp"
                data-delay="300"
              >
                <i className="fa fa-globe fa-5x"></i>
                <h3 className="mt-5 mb-4">
                  <a href="#">Web Design</a>
                </h3>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
              </div>
              <div
                className="col-sm-4 service animated hiding"
                data-animation="fadeInUp"
                data-delay="600"
              >
                <i className="fa fa-cloud fa-5x"></i>
                <h3 className="mt-5 mb-4">
                  <a href="#">Web Development</a>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque lau dantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta.
                </p>
              </div>
              <div
                className="col-sm-4 service animated hiding"
                data-animation="fadeInUp"
                data-delay="900"
              >
                <i className="fa fa-mobile fa-5x"></i>
                <h3 className="mt-5 mb-4">
                  <a href="#">Mobile Development</a>
                </h3>
                <p>
                  Aliquam aliquet, est a ullamcorper condimentum, tellus nulla
                  fringilla elit, a iaculis nulla turpis sed wisi. Fusce
                  volutpat. Etiam sodales ante id nunc. Proin ornare dignissim
                  lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Services
