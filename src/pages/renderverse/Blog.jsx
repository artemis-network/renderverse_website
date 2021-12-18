import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      {/* Hero Start */}
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
                  Blog &amp; News
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
      {/* Blog Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/01.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">ICO</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    Start The Redemption Before The ICO Completion
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/02.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">Bitcoin</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    New Trends In UI/UX Design World Integration
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/03.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">
                      Cryptocurrency
                    </span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    The Crypto Project Has Reached Seven Billions
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/04.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">Blockchain</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    What is blockchain ?
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/05.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">Crypto</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    Top 10 cryptocurrency
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/06.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">Trading</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    Trading Platform
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/07.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">Crypto</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    The Crypto Project Has Reached Seven Billions
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card blog blog-primary border-0 rounded shadow overflow-hidden">
                <img src="images/blog/08.jpg" className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-soft-primary">Integration</span>
                    <span className="text-muted">31st May 2021</span>
                  </div>
                  <a href="blog-detail.html" className="title text-dark h5">
                    New Trends In UI/UX Design World Integration
                  </a>
                  <div className="mt-3">
                    <a href="blog-detail.html" className="link">
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            {/* PAGINATION START */}
            <div className="col-12 mt-4 pt-2">
              <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                <li className="page-item">
                  <Link className="page-link" aria-label="Previous">
                    Prev
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link">1</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link">2</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link">3</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" aria-label="Next">
                    Next
                  </Link>
                </li>
              </ul>
            </div>
            {/*end col*/}
            {/* PAGINATION END */}
          </div>
          {/*end col*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Blog End */}
      {/* Start */}
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-4">
                  Be the first to know about Crypto news everyday
                </h4>
                <p className="para-desc mx-auto text-muted mb-0">
                  Get crypto analysis, news and updates right to your inbox!
                  Sign up here so you don't miss a single newsletter.
                </p>
                <div className="subcribe-form mt-5">
                  <form>
                    <div className="mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-white rounded"
                        required
                        placeholder="Enter your email address"
                      />
                      <button type="submit" className="btn btn-primary">
                        Notify me
                      </button>
                    </div>
                  </form>
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
    </div>
  );
};

export default Blog;
