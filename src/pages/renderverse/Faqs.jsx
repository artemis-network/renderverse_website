const Faqs = () => {
  return (
    <div>
      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-12">
              <div className="card section-title bg-white p-4 shadow rounded border-0">
                <ul
                  className="nav nav-pills nav-justified flex-column bg-transparent mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link rounded shadow active"
                      id="pills-buying-tab"
                      data-bs-toggle="pill"
                      href="#pills-buying"
                      role="tab"
                      aria-controls="pills-buying"
                      aria-selected="false"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">About Cryptor</h6>
                      </div>
                    </a>
                    {/*end nav link*/}
                  </li>
                  {/*end nav item*/}
                  <li className="nav-item mt-3">
                    <a
                      className="nav-link rounded shadow"
                      id="pills-general-tab"
                      data-bs-toggle="pill"
                      href="#pills-general"
                      role="tab"
                      aria-controls="pills-general"
                      aria-selected="false"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">Accounts</h6>
                      </div>
                    </a>
                    {/*end nav link*/}
                  </li>
                  {/*end nav item*/}
                  <li className="nav-item mt-3">
                    <a
                      className="nav-link rounded shadow"
                      id="pills-payment-tab"
                      data-bs-toggle="pill"
                      href="#pills-payment"
                      role="tab"
                      aria-controls="pills-payment"
                      aria-selected="false"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">Transactions</h6>
                      </div>
                    </a>
                    {/*end nav link*/}
                  </li>
                  {/*end nav item*/}
                  <li className="nav-item mt-3">
                    <a
                      className="nav-link rounded shadow"
                      id="pills-support-tab"
                      data-bs-toggle="pill"
                      href="#pills-support"
                      role="tab"
                      aria-controls="pills-support"
                      aria-selected="false"
                    >
                      <div className="text-start py-1 px-3">
                        <h6 className="mb-0">Cryptocurrency Withdrawals</h6>
                      </div>
                    </a>
                    {/*end nav link*/}
                  </li>
                  {/*end nav item*/}
                </ul>
                {/*end nav pills*/}
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-buying"
                  role="tabpanel"
                  aria-labelledby="pills-buying-tab"
                >
                  <div className="section-title" id="tech">
                    <h5>About Cryptor</h5>
                  </div>
                  <div className="accordion mt-4 pt-2" id="buyingquestion">
                    <div className="accordion-item rounded border-0 shadow">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button border-0 bg-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is Cryptor?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse border-0 collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#buyingquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How does Cryptor work?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#buyingquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Why should I trust you?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#buyingquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What is exchange rate?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#buyingquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end teb pane*/}
                <div
                  className="tab-pane fade"
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                >
                  <div className="section-title" id="general">
                    <h5>Accounts</h5>
                  </div>
                  <div className="accordion mt-4 pt-2" id="generalquestion">
                    <div className="accordion-item rounded border-0 shadow">
                      <h2 className="accordion-header" id="headingfive">
                        <button
                          className="accordion-button border-0 bg-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefive"
                          aria-expanded="true"
                          aria-controls="collapsefive"
                        >
                          Why do I need to enter my email?
                        </button>
                      </h2>
                      <div
                        id="collapsefive"
                        className="accordion-collapse border-0 collapse show"
                        aria-labelledby="headingfive"
                        data-bs-parent="#generalquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingsix">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          What is the 2-factor authentication?
                        </button>
                      </h2>
                      <div
                        id="collapsesix"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingsix"
                        data-bs-parent="#generalquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingseven">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseseven"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          What should I do if I lose a device with 2FA
                          authentication?
                        </button>
                      </h2>
                      <div
                        id="collapseseven"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingseven"
                        data-bs-parent="#generalquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingeight">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseeight"
                          aria-expanded="false"
                          aria-controls="collapseeight"
                        >
                          What happens when I receive an order ?
                        </button>
                      </h2>
                      <div
                        id="collapseeight"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingeight"
                        data-bs-parent="#generalquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end teb pane*/}
                <div
                  className="tab-pane fade"
                  id="pills-payment"
                  role="tabpanel"
                  aria-labelledby="pills-payment-tab"
                >
                  <div className="section-title" id="payment">
                    <h5>Transactions</h5>
                  </div>
                  <div className="accordion mt-4 pt-2" id="paymentquestion">
                    <div className="accordion-item rounded border-0 shadow">
                      <h2 className="accordion-header" id="headingnine">
                        <button
                          className="accordion-button border-0 bg-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsenine"
                          aria-expanded="true"
                          aria-controls="collapsenine"
                        >
                          What’s a wallet address?
                        </button>
                      </h2>
                      <div
                        id="collapsenine"
                        className="accordion-collapse border-0 collapse show"
                        aria-labelledby="headingnine"
                        data-bs-parent="#paymentquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingten">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseten"
                          aria-expanded="false"
                          aria-controls="collapseten"
                        >
                          How do I get a wallet address?
                        </button>
                      </h2>
                      <div
                        id="collapseten"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingten"
                        data-bs-parent="#paymentquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingeleven">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseeleven"
                          aria-expanded="false"
                          aria-controls="collapseeleven"
                        >
                          What's the recipient’s address?
                        </button>
                      </h2>
                      <div
                        id="collapseeleven"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingeleven"
                        data-bs-parent="#paymentquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingtwelve">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsetwelve"
                          aria-expanded="false"
                          aria-controls="collapsetwelve"
                        >
                          What is the maximal/minimal amount?
                        </button>
                      </h2>
                      <div
                        id="collapsetwelve"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingtwelve"
                        data-bs-parent="#paymentquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end teb pane*/}
                <div
                  className="tab-pane fade"
                  id="pills-support"
                  role="tabpanel"
                  aria-labelledby="pills-support-tab"
                >
                  <div className="section-title" id="support">
                    <h5>Cryptocurrency Withdrawals</h5>
                  </div>
                  <div className="accordion mt-4 pt-2" id="supportquestion">
                    <div className="accordion-item rounded border-0 shadow">
                      <h2 className="accordion-header" id="headingthirteen">
                        <button
                          className="accordion-button border-0 bg-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsethirteen"
                          aria-expanded="true"
                          aria-controls="collapsethirteen"
                        >
                          Which currencies are accepted for crypto-to-fiat
                          transactions?
                        </button>
                      </h2>
                      <div
                        id="collapsethirteen"
                        className="accordion-collapse border-0 collapse show"
                        aria-labelledby="headingthirteen"
                        data-bs-parent="#supportquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingfourteen">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefourteen"
                          aria-expanded="false"
                          aria-controls="collapsefourteen"
                        >
                          What limits are set for this transaction type?
                        </button>
                      </h2>
                      <div
                        id="collapsefourteen"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingfourteen"
                        data-bs-parent="#supportquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingfifteen">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefifteen"
                          aria-expanded="false"
                          aria-controls="collapsefifteen"
                        >
                          What is SEPA bank transfer?
                        </button>
                      </h2>
                      <div
                        id="collapsefifteen"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingfifteen"
                        data-bs-parent="#supportquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item rounded border-0 shadow mt-3">
                      <h2 className="accordion-header" id="headingsixteen">
                        <button
                          className="accordion-button border-0 bg-white collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesixteen"
                          aria-expanded="false"
                          aria-controls="collapsesixteen"
                        >
                          Which countries support crypto-to-fiat transactions?
                        </button>
                      </h2>
                      <div
                        id="collapsesixteen"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="headingsixteen"
                        data-bs-parent="#supportquestion"
                      >
                        <div className="accordion-body text-muted bg-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end teb pane*/}
              </div>
              {/*end tab content*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div
          className="position-absolute top-50 end-0 translate-middle-y"
          style={{ zIndex: -1, opacity: "0.1" }}
        >
          <img src="images/icon-gradient.png" height={550} alt="" />
        </div>
      </section>
      {/*end section*/}
      {/* End */}
      {/* Start */}
      {/*end section*/}
      {/* End */}
    </div>
  );
};

export default Faqs;
