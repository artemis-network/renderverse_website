import { Link } from "react-router-dom";
const Market = () => {
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
                <span className="text-white-50">In the past 24 hours</span>
                <h4 className="text-white title-dark mt-2 mb-4">
                  Market is up <span className="text-success">15.78%</span>
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched with excellent service.
                </p>
                <div className="subcribe-form mt-4 pt-2">
                  <form className="m-0 mx-auto">
                    <div className>
                      <input
                        type="text"
                        id="course"
                        name="name"
                        className="rounded bg-white opacity-7"
                        placeholder="Search assets..."
                      />
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </form>
                  {/*end form*/}
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
      {/* Hero End */}
      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4">
                <h4>Top Movers</h4>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/bitcoin.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-success"
                    alt=""
                  />
                  <span className="text-muted fw-medium">BTC</span>
                </div>
                <h6>Bitcoin</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-success">+15.55%</small>
                  <small className="text-success">+$ 155</small>
                  <small>$ 41245</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-1" />
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/ethereum.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-danger"
                    alt=""
                  />
                  <span className="text-muted fw-medium">ETS</span>
                </div>
                <h6>Ethereum</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-danger">-25.01%</small>
                  <small className="text-danger">-$ 524</small>
                  <small>$ 1458</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-2" />
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/monero.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-success"
                    alt=""
                  />
                  <span className="text-muted fw-medium">XMR</span>
                </div>
                <h6>Monero</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-success">+3.08%</small>
                  <small className="text-success">+$ 58</small>
                  <small>$ 448</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-3" />
                  </div>
                </div>
              </div>
            </div>
            {/*end slide*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="card border-0 p-4 rounded shadow position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img
                    src="images/coin/litecoin.png"
                    className="avatar avatar-coin rounded-pill p-1 bg-danger"
                    alt=""
                  />
                  <span className="text-muted fw-medium">LTC</span>
                </div>
                <h6>Litecoin</h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className="text-danger">-5.05%</small>
                  <small className="text-danger">-$ 48</small>
                  <small>$ 478</small>
                </div>
                <div className="crypto-chart">
                  <div>
                    <div id="chart-4" />
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center">
            <div className="col-12 mt-4 pt-2">
              <div className="table-responsive bg-white shadow rounded">
                <table className="table mb-0 table-center">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="fw-normal text-muted py-4"
                        style={{ minWidth: "250px" }}
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="fw-normal text-muted py-4"
                        style={{ width: "150px" }}
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="fw-normal text-muted py-4"
                        style={{ width: "150px" }}
                      >
                        Change(%)
                      </th>
                      <th
                        scope="col"
                        className="fw-normal text-muted py-4"
                        style={{ width: "150px" }}
                      >
                        Change($)
                      </th>
                      <th
                        scope="col"
                        className="fw-normal text-muted py-4"
                        style={{ width: "150px" }}
                      >
                        Marketcap
                      </th>
                      <th
                        scope="col"
                        className="fw-normal text-end text-muted py-4"
                        style={{ width: "100px" }}
                      >
                        Trade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/bitcoin.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Bitcoin <span className="text-muted">BTC</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$34587</td>
                      <td className="text-danger">-2.5%</td>
                      <td className="text-danger">-$745</td>
                      <td className="text-muted">$725,354M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/litecoin.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Litecoin <span className="text-muted">LTC</span>
                          </p>
                        </div>
                      </th>
                      <td>$216</td>
                      <td className="text-success">+.264%</td>
                      <td className="text-success">+$.264</td>
                      <td className="text-muted">$11,100M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/auroracoin.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Auroracoin <span className="text-muted">ARC</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$452</td>
                      <td className="text-danger">-1.9%</td>
                      <td className="text-danger">-$1.9</td>
                      <td className="text-muted">$45,785M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/coinye.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Coinye <span className="text-muted">CNY</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$154</td>
                      <td className="text-success">+1.05%</td>
                      <td className="text-success">+$1.05</td>
                      <td className="text-muted">$85,478M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/ethereum.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mt-2 d-inline fw-normal h6">
                            Ethereum Coin{" "}
                            <span className="text-muted">ETH</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$854</td>
                      <td className="text-success">+1.705%</td>
                      <td className="text-success">+$1.705</td>
                      <td className="text-muted">$112,452M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/potcoin.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Potcoin <span className="text-muted">PTC</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$548</td>
                      <td className="text-danger">-3.2%</td>
                      <td className="text-danger">-$3.2</td>
                      <td className="text-muted">$4,712M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/zcash.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Zcash Coin <span className="text-muted">ZCC</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$965</td>
                      <td className="text-success">+1.465%</td>
                      <td className="text-success">+$1.465</td>
                      <td className="text-muted">$487,552M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/primecoin.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Prime coin <span className="text-muted">XPM</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$4875</td>
                      <td className="text-danger">-1.08%</td>
                      <td className="text-danger">-$1.08</td>
                      <td className="text-muted">$55,221M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/blocknet.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Blocknet <span className="text-muted">BLOCK</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$478</td>
                      <td className="text-success">+2.8%</td>
                      <td className="text-success">+$2.8</td>
                      <td className="text-muted">$66,552M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/kucoin.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Kucoin <span className="text-muted">KCS</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$545</td>
                      <td className="text-success">+1.5%</td>
                      <td className="text-success">+$1.5</td>
                      <td className="text-muted">$98,562M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/bittorrent.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Bittorrent <span className="text-muted">BTT</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$4935</td>
                      <td className="text-danger">-3.2%</td>
                      <td className="text-danger">-$3.2</td>
                      <td className="text-muted">$663,214M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/avalanche.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Avalanche <span className="text-muted">AVAX</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$1008</td>
                      <td className="text-success">+1.4%</td>
                      <td className="text-success">+$1.4</td>
                      <td className="text-muted">$88,512M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/bitcoin-cash.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Bitcoin cash <span className="text-muted">BCS</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$816</td>
                      <td className="text-success">+4.65%</td>
                      <td className="text-success">+$4.65</td>
                      <td className="text-muted">$54,212M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/binance.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Binance <span className="text-muted">BNB</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$965</td>
                      <td className="text-success">-2.45%</td>
                      <td className="text-success">-$2.45</td>
                      <td className="text-muted">$458,122M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3">
                        <div className="align-items-center">
                          <img
                            src="images/coin/monero.png"
                            className="me-3"
                            height={32}
                            alt=""
                          />
                          <p className="mb-0 d-inline fw-normal h6">
                            Monero <span className="text-muted">XMR</span>{" "}
                          </p>
                        </div>
                      </th>
                      <td>$4758</td>
                      <td className="text-success">+3.5%</td>
                      <td className="text-success">+$3.5</td>
                      <td className="text-muted">$52,142M</td>
                      <td className="text-end">
                        <Link className="btn btn-sm btn-soft-primary">
                          Trade
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/*end table*/}
              </div>
            </div>
            {/*end col*/}
            {/* PAGINATION START */}
            <div className="col-12 mt-4 pt-2">
              <div className="d-md-flex align-items-center text-center justify-content-between">
                <span className="text-muted me-3">
                  Showing 1 - 15 out of 452
                </span>
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
            </div>
            {/*end col*/}
            {/* PAGINATION END */}
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

export default Market;
