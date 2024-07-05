import { Header, Sidebar } from "../components";

export const Dashboard = () => {
  return (
    <>
      <div className="page-wrapper">
        <Sidebar />

        <div className="main-container">
          <Header />

          <div className="content-wrapper-scroll">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="stats-tile">
                    <div className="sale-icon shade-red">
                      <i className="bi bi-pie-chart"></i>
                    </div>
                    <div className="sale-details">
                      <h3 className="text-red">250k</h3>
                      <p>Sales</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="stats-tile">
                    <div className="sale-icon shade-blue">
                      <i className="bi bi-emoji-smile"></i>
                    </div>
                    <div className="sale-details">
                      <h3 className="text-blue">24m</h3>
                      <p>Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="stats-tile">
                    <div className="sale-icon shade-yellow">
                      <i className="bi bi-box-seam"></i>
                    </div>
                    <div className="sale-details">
                      <h3 className="text-yellow">15k</h3>
                      <p>Products</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="stats-tile">
                    <div className="sale-icon shade-green">
                      <i className="bi bi-handbag"></i>
                    </div>
                    <div className="sale-details">
                      <h3 className="text-green">180m</h3>
                      <p>Revenue</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xxl-9  col-sm-12 col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xxl-3 col-sm-4 col-12">
                          <div className="reports-summary">
                            <div className="reports-summary-block">
                              <i className="bi bi-circle-fill text-primary me-2"></i>
                              <div className="d-flex flex-column">
                                <h6>Overall Sales</h6>
                                <h5>12 Millions</h5>
                              </div>
                            </div>
                            <div className="reports-summary-block">
                              <i className="bi bi-circle-fill text-success me-2"></i>
                              <div className="d-flex flex-column">
                                <h6>Overall Earnings</h6>
                                <h5>78 Millions</h5>
                              </div>
                            </div>
                            <div className="reports-summary-block">
                              <i className="bi bi-circle-fill text-danger me-2"></i>
                              <div className="d-flex flex-column">
                                <h6>Overall Revenue</h6>
                                <h5>60 Millions</h5>
                              </div>
                            </div>
                            <div className="reports-summary-block">
                              <i className="bi bi-circle-fill text-warning me-2"></i>
                              <div className="d-flex flex-column">
                                <h6>New Customers</h6>
                                <h5>23k</h5>
                              </div>
                            </div>
                            <button className="btn btn-info download-reports">
                              View Reports
                            </button>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-sm-8 col-12">
                          <div className="row">
                            <div className="col-12">
                              <div
                                className="graph-day-selection mt-2"
                                role="group"
                              >
                                <button type="button" className="btn active">
                                  Today
                                </button>
                                <button type="button" className="btn">
                                  Yesterday
                                </button>
                                <button type="button" className="btn">
                                  7 days
                                </button>
                                <button type="button" className="btn">
                                  15 days
                                </button>
                                <button type="button" className="btn">
                                  30 days
                                </button>
                              </div>
                            </div>
                            <div className="col-12">
                              <div id="revenueGraph"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3  col-sm-12 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Sales</div>
                    </div>
                    <div className="card-body">
                      <div id="salesGraph" className="auto-align-graph"></div>
                      <div className="num-stats">
                        <h2>2100</h2>
                        <h6 className="text-truncate">
                          12% higher than last month.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Orders</div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table v-middle">
                          <thead>
                            <tr>
                              <th>Customer</th>
                              <th>Product</th>
                              <th>User ID</th>
                              <th>Ordered Placed</th>
                              <th>Amount</th>
                              <th>Payment Status</th>
                              <th>Order Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="media-box">
                                  <img
                                    src="assets/images/user3.png"
                                    className="media-avatar"
                                    alt="Bootstrap Gallery"
                                  />
                                  <div className="media-box-body">
                                    <div className="text-truncate">
                                      Ellie Collins
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="media-box">
                                  <img
                                    src="assets/images/food/img3.jpg"
                                    className="media-avatar"
                                    alt="Admin Themes"
                                  />
                                  <div className="media-box-body">
                                    <div className="text-truncate">
                                      Ginger Snacks
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>Arise827</td>
                              <td>12/12/2021</td>
                              <td>$18.00</td>
                              <td>
                                <span className="text-green td-status">
                                  <i className="bi bi-check-circle"></i> Paid
                                </span>
                              </td>
                              <td>
                                <span className="badge shade-green min-90">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-box">
                                  <img
                                    src="assets/images/user.png"
                                    className="media-avatar"
                                    alt="Bootstrap Gallery"
                                  />
                                  <div className="media-box-body">
                                    <div className="text-truncate">
                                      Sophie Nguyen
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="media-box">
                                  <img
                                    src="assets/images/food/img6.jpg"
                                    className="media-avatar"
                                    alt="Admin Themes"
                                  />
                                  <div className="media-box-body">
                                    <div className="text-truncate">
                                      Guava Sorbet
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>Arise253</td>
                              <td>18/12/2021</td>
                              <td>$32.00</td>
                              <td>
                                <span className="text-red td-status">
                                  <i className="bi bi-x-circle"></i> Failed
                                </span>
                              </td>
                              <td>
                                <span className="badge shade-red min-90">
                                  Cancelled
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-box">
                                  <img
                                    src="assets/images/user4.png"
                                    className="media-avatar"
                                    alt="Bootstrap Gallery"
                                  />
                                  <div className="media-box-body">
                                    <div className="text-truncate">
                                      Darcy Ryan
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="media-box">
                                  <img
                                    src="assets/images/food/img5.jpg"
                                    className="media-avatar"
                                    alt="Admin Themes"
                                  />
                                  <div className="media-box-body">
                                    <div className="text-truncate">
                                      Gooseberry Surprise
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>Arise878</td>
                              <td>22/12/2021</td>
                              <td>$19.00</td>
                              <td>
                                <span className="text-blue td-status">
                                  <i className="bi bi-clock-history"></i>{" "}
                                  Awaiting
                                </span>
                              </td>
                              <td>
                                <span className="badge shade-blue min-90">
                                  Processing
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Transactions</div>
                    </div>
                    <div className="card-body">
                      <div className="scroll370">
                        <div className="transactions-container">
                          <div className="transaction-block">
                            <div className="transaction-icon shade-blue">
                              <i className="bi bi-credit-card"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Visa Card</h4>
                              <p className="text-truncate">Laptop Ordered</p>
                            </div>
                            <div className="transaction-amount text-blue">
                              $1590
                            </div>
                          </div>
                          <div className="transaction-block">
                            <div className="transaction-icon shade-green">
                              <i className="bi bi-paypal"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Paypal</h4>
                              <p className="text-truncate">Payment Received</p>
                            </div>
                            <div className="transaction-amount text-green">
                              $310
                            </div>
                          </div>
                          <div className="transaction-block">
                            <div className="transaction-icon shade-blue">
                              <i className="bi bi-pin-map"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Travel</h4>
                              <p className="text-truncate">Yosemite Trip</p>
                            </div>
                            <div className="transaction-amount text-blue">
                              $4900
                            </div>
                          </div>
                          <div className="transaction-block">
                            <div className="transaction-icon shade-blue">
                              <i className="bi bi-bag-check"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Shopping</h4>
                              <p className="text-truncate">Bill Paid</p>
                            </div>
                            <div className="transaction-amount text-blue">
                              $285
                            </div>
                          </div>
                          <div className="transaction-block">
                            <div className="transaction-icon shade-green">
                              <i className="bi bi-boxes"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Bank</h4>
                              <p className="text-truncate">Investment</p>
                            </div>
                            <div className="transaction-amount text-green">
                              $150
                            </div>
                          </div>
                          <div className="transaction-block">
                            <div className="transaction-icon shade-green">
                              <i className="bi bi-paypal"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Paypal</h4>
                              <p className="text-truncate">Amount Received</p>
                            </div>
                            <div className="transaction-amount text-green">
                              $790
                            </div>
                          </div>
                          <div className="transaction-block">
                            <div className="transaction-icon shade-blue">
                              <i className="bi bi-credit-card-2-front"></i>
                            </div>
                            <div className="transaction-details">
                              <h4>Credit Card</h4>
                              <p className="text-truncate">Online Shopping</p>
                            </div>
                            <div className="transaction-amount text-red">
                              $280
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Tasks</div>
                    </div>
                    <div className="card-body">
                      <div id="taskGraph"></div>
                      <ul className="task-list-container">
                        <li className="task-list-item">
                          <div className="task-icon shade-blue">
                            <i className="bi bi-clipboard-plus"></i>
                          </div>
                          <div className="task-info">
                            <h5 className="task-title">New</h5>
                            <p className="amount-spend">12</p>
                          </div>
                        </li>
                        <li className="task-list-item">
                          <div className="task-icon shade-green">
                            <i className="bi bi-clipboard-check"></i>
                          </div>
                          <div className="task-info">
                            <h5 className="task-title">Done</h5>
                            <p className="amount-spend">15</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Notifications</div>
                    </div>
                    <div className="card-body">
                      <div className="scroll370">
                        <ul className="user-messages">
                          <li>
                            <div className="customer shade-blue">MK</div>
                            <div className="delivery-details">
                              <span className="badge shade-blue">Sales</span>
                              <h5>Marie Kieffer</h5>
                              <p>
                                Thanks for choosing Apple product, further if
                                you have any questions please contact sales
                                team.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="customer shade-blue">ES</div>
                            <div className="delivery-details">
                              <span className="badge shade-blue">
                                Marketing
                              </span>
                              <h5>Ewelina Sikora</h5>
                              <p>
                                Boost your sales by 50% with the easiest and
                                proven marketing tool for customer enggement
                                &amp; motivation.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="customer shade-blue">TN</div>
                            <div className="delivery-details">
                              <span className="badge shade-blue">Business</span>
                              <h5>Teboho Ncube</h5>
                              <p>
                                Use an exclusive promo code HKYMM50 and get 50%
                                off on your first order in the new year.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="customer shade-blue">CJ</div>
                            <div className="delivery-details">
                              <span className="badge shade-blue">Admin</span>
                              <h5>Carla Jackson</h5>
                              <p>
                                Befor inviting the administrator, you must
                                create a role that can be assigned to them.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="customer shade-red">JK</div>
                            <div className="delivery-details">
                              <span className="badge shade-red">Security</span>
                              <h5>Julie Kemp</h5>
                              <p>
                                Your security subscription has expired. Please
                                renew the subscription.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Activity</div>
                    </div>
                    <div className="card-body">
                      <div className="scroll370">
                        <div className="activity-container">
                          <div className="activity-block">
                            <div className="activity-user">
                              <img
                                src="assets/images/user.png"
                                alt="Activity User"
                              />
                            </div>
                            <div className="activity-details">
                              <h4>Lilly Desmet</h4>
                              <h5>3 hours ago</h5>
                              <p>Sent invoice ref. #23457</p>
                              <span className="badge shade-green">Sent</span>
                            </div>
                          </div>
                          <div className="activity-block">
                            <div className="activity-user">
                              <img
                                src="assets/images/user3.png"
                                alt="Activity User"
                              />
                            </div>
                            <div className="activity-details">
                              <h4>Jennifer Wilson</h4>
                              <h5>7 hours ago</h5>
                              <p>Paid invoice ref. #23459</p>
                              <span className="badge shade-red">Payments</span>
                            </div>
                          </div>
                          <div className="activity-block">
                            <div className="activity-user">
                              <img
                                src="assets/images/user4.png"
                                alt="Activity User"
                              />
                            </div>
                            <div className="activity-details">
                              <h4>Elliott Hermans</h4>
                              <h5>1 day ago</h5>
                              <p>Paid invoice ref. #23473</p>
                              <span className="badge shade-green">Paid</span>
                            </div>
                          </div>
                          <div className="activity-block">
                            <div className="activity-user">
                              <img
                                src="assets/images/user5.png"
                                alt="Activity User"
                              />
                            </div>
                            <div className="activity-details">
                              <h4>Sophie Michiels</h4>
                              <h5>3 day ago</h5>
                              <p>Paid invoice ref. #26788</p>
                              <span className="badge shade-green">Sent</span>
                            </div>
                          </div>
                          <div className="activity-block">
                            <div className="activity-user">
                              <img
                                src="assets/images/user2.png"
                                alt="Activity User"
                              />
                            </div>
                            <div className="activity-details">
                              <h4>Ilyana Maes</h4>
                              <h5>One week ago</h5>
                              <p>Paid invoice ref. #34546</p>
                              <span className="badge shade-red">Invoice</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-footer">
              <span>© Arise admin 2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
