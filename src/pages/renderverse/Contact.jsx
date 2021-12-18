import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: 'url("images/bg/market.png") bottom' }}
      >
        <div className="bg-overlay bg-gradient-primary opacity-9" />
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title text-white title-dark fw-medium mb-4">
                  Contact Us
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Hero End */}
      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="features-absolute bg-white p-4 p-md-5 rounded shadow">
                <div className="custom-form">
                  <form
                    method="post"
                    name="myForm"
                    onsubmit="return validateForm()"
                  >
                    <p id="error-msg" />
                    <div id="simple-msg" />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name :"
                          />
                          <label>Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email :"
                          />
                          <label>Email address</label>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            name="subject"
                            id="subject"
                            className="form-control"
                            placeholder="subject :"
                          />
                          <label>Subject</label>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            name="comments"
                            id="comments"
                            style={{ height: "150px" }}
                            className="form-control"
                            placeholder="Leave a comment here"
                            defaultValue={""}
                          />
                          <label>Comments</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            type="submit"
                            id="submit"
                            name="send"
                            className="btn btn-primary"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                </div>
                {/*end custom-form*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature feature-primary feature-clean text-center rounded px-4">
                <div className="icons text-center">
                  <i className="uil uil-phone d-block mx-auto rounded h3 mb-0" />
                </div>
                <div className="card-body p-0 mt-4">
                  <h5 className>Phone</h5>
                  <p className="text-muted">
                    Start working with Landflow that can provide everything
                  </p>
                  <a href="tel:+152534-468-854" className="link">
                    +152 534-468-854
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="feature feature-primary feature-clean text-center rounded px-4">
                <div className="icons text-center">
                  <i className="uil uil-envelope d-block mx-auto rounded h3 mb-0" />
                </div>
                <div className="card-body p-0 mt-4">
                  <h5 className>Email</h5>
                  <p className="text-muted">
                    Start working with Landflow that can provide everything
                  </p>
                  <a href="mailto:contact@example.com" className="link">
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="feature feature-primary feature-clean text-center rounded px-4">
                <div className="icons text-center">
                  <i className="uil uil-map-marker d-block mx-auto rounded h3 mb-0" />
                </div>
                <div className="card-body p-0 mt-4">
                  <h5 className>Location</h5>
                  <p className="text-muted">
                    C/54 Northwest Freeway, Suite 558, <br />
                    Houston, USA 485
                  </p>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#watchvideomodal"
                    className="video-play-icon h6 link"
                  >
                    View on Google map
                  </Link>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="card map border-0">
              <div className="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="map"
                />
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </div>
  );
};

export default Contact;
