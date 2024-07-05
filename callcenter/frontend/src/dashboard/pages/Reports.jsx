import { Sidebar } from "../components/Sidebar";

export const Reports = () => {
  return (
    <>
    <Sidebar />

    <div class="page-wrapper">

      <nav class="sidebar-wrapper">

        <div class="sidebar-brand">
          <a href="index.html" class="logo">
            <img src="assets/images/logo.svg" alt="Admin Dashboards" />
          </a>
        </div>

        <div class="sidebar-menu">
          <div class="sidebarMenuScroll">
            <ul>
              <li class="sidebar-dropdown active">
                <a href="#">
                  <i class="bi bi-house"></i>
                  <span class="menu-text">Dashboards</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="index.html">Analytics</a>
                    </li>
                    <li>
                      <a href="reports.html" class="current-page">Reports</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-handbag"></i>
                  <span class="menu-text">Product</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="orders.html">Order History</a>
                    </li>
                    <li>
                      <a href="products.html">Products</a>
                    </li>
                    <li>
                      <a href="view-cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Billing Details</a>
                    </li>
                    <li>
                      <a href="customers.html">Customers</a>
                    </li>
                    <li>
                      <a href="add-product.html">Add Product</a>
                    </li>
                    <li>
                      <a href="reviews.html">Reviews</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-gem"></i>
                  <span class="menu-text">Widgets</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="widgets.html">Widgets</a>
                    </li>
                    <li>
                      <a href="graph-widgets.html">Graph Widgets</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-collection"></i>
                  <span class="menu-text">UI Elements</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="alerts.html">Alerts</a>
                    </li>
                    <li>
                      <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="badges.html">Badges</a>
                    </li>
                    <li>
                      <a href="cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="dropdowns.html">Dropdowns</a>
                    </li>
                    <li>
                      <a href="icons.html">Icons</a>
                    </li>
                    <li>
                      <a href="modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="offcanvas.html">Off Canvas</a>
                    </li>
                    <li>
                      <a href="progress.html">Progress Bars</a>
                    </li>
                    <li>
                      <a href="spinners.html">Spinners</a>
                    </li>
                    <li>
                      <a href="tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="tooltips.html">Tooltips</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-stickies"></i>
                  <span class="menu-text">Pages</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="account-settings.html">Account Settings</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="calendar.html">
                  <i class="bi bi-calendar4"></i>
                  <span class="menu-text">Calendar</span>
                </a>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-columns-gap"></i>
                  <span class="menu-text">Forms</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="form-inputs.html">Form Inputs</a>
                    </li>
                    <li>
                      <a href="form-checkbox-radio.html">Checkbox &amp; Radio</a>
                    </li>
                    <li>
                      <a href="form-file-input.html">File Input</a>
                    </li>
                    <li>
                      <a href="form-validations.html">Validations</a>
                    </li>
                    <li>
                      <a href="bs-select.html">Bootstrap Select</a>
                    </li>
                    <li>
                      <a href="date-time-pickers.html">Date Time Pickers</a>
                    </li>
                    <li>
                      <a href="input-mask.html">Input Masks</a>
                    </li>
                    <li>
                      <a href="editor.html">Editor</a>
                    </li>
                    <li>
                      <a href="form-layout1.html">Form Layout</a>
                    </li>
                    <li>
                      <a href="form-layout2.html">Form Layout 2</a>
                    </li>
                    <li>
                      <a href="form-layout3.html">Form Layout 3</a>
                    </li>
                    <li>
                      <a href="form-layout4.html">Form Horizontal</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-window-split"></i>
                  <span class="menu-text">Tables</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="tables.html">Tables</a>
                    </li>
                    <li>
                      <a href="data-tables.html">Data Tables</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-pie-chart"></i>
                  <span class="menu-text">Graphs &amp; Maps</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="apex.html">Apex</a>
                    </li>
                    <li>
                      <a href="morris.html">Morris</a>
                    </li>
                    <li>
                      <a href="maps.html">Maps</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-layout-sidebar"></i>
                  <span class="menu-text">Layouts</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="layout.html">Default Layout</a>
                    </li>
                    <li>
                      <a href="layout-grid.html">Grid Layout</a>
                    </li>
                    <li>
                      <a href="layout-welcome.html">Welcome Layout</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="bi bi-x-diamond"></i>
                  <span class="menu-text">Authentication</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="signup.html">Signup</a>
                    </li>
                    <li>
                      <a href="error.html">Error</a>
                    </li>
                    <li>
                      <a href="maintenance.html">Maintenance</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="starter-page.html">
                  <i class="bi bi-hand-index-thumb"></i>
                  <span class="menu-text">Link</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>


      <div class="main-container">

        <div class="page-header">

          <div class="toggle-sidebar" id="toggle-sidebar"><i class="bi bi-list"></i></div>

          <ol class="breadcrumb d-md-flex d-none">
            <li class="breadcrumb-item">
              <i class="bi bi-house"></i>
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item breadcrumb-active" aria-current="page">Analytics</li>
          </ol>

          <div class="header-actions-container">

            <div class="search-container">

              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search anything"/>
                <button class="btn" type="button">
                  <i class="bi bi-search"></i>
                </button>
              </div>

            </div>

            <a href="orders.html" class="leads d-none d-xl-flex">
              <div class="lead-details">You have <span class="count"> 21 </span> new leads </div>
              <span class="lead-icon"><i
                  class="bi bi-bell-fill animate__animated animate__swing animate__infinite infinite"></i><b
                  class="dot animate__animated animate__heartBeat animate__infinite"></b></span>
            </a>

            <ul class="header-actions">
              <li class="dropdown d-none d-md-block">
                <a href="#" id="countries" data-toggle="dropdown" aria-haspopup="true">
                  <img src="assets/images/flags/1x1/br.svg" class="flag-img" alt="Admin Panels" />
                </a>
                <div class="dropdown-menu dropdown-menu-end mini" aria-labelledby="countries">
                  <div class="country-container">
                    <a href="index.html">
                      <img src="assets/images/flags/1x1/us.svg" alt="Clean Admin Dashboards" />
                    </a>
                    <a href="index.html">
                      <img src="assets/images/flags/1x1/in.svg" alt="Google Dashboards" />
                    </a>
                    <a href="index.html">
                      <img src="assets/images/flags/1x1/gb.svg" alt="AI Admin Dashboards" />
                    </a>
                    <a href="index.html">
                      <img src="assets/images/flags/1x1/tr.svg" alt="Modern Dashboards" />
                    </a>
                    <a href="index.html">
                      <img src="assets/images/flags/1x1/ca.svg" alt="Best Admin Dashboards" />
                    </a>
                  </div>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" id="userSettings" class="user-settings" data-toggle="dropdown" aria-haspopup="true">
                  <span class="user-name d-none d-md-block">Abigale Heaney</span>
                  <span class="avatar">
                    <img src="assets/images/user.png" alt="Admin Templates"/>
                    <span class="status online"></span>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
                  <div class="header-profile-actions">
                    <a href="profile.html">Profile</a>
                    <a href="account-settings.html">Settings</a>
                    <a href="login.html">Logout</a>
                  </div>
                </div>
              </li>
            </ul>

          </div>

        </div>

        <div class="content-wrapper-scroll">

          <div className="content-wrapper-scroll">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-xxl-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Revenue</div>
                      </div>
                      <div className="card-body">
                        <div id="world-map-markers" className="chart-height"></div>

                        <div className="row">
                          <div className="col-sm-4 col-12">
                            <div className="info-stats">
                              <img
                                src="assets/images/flags/1x1/us.svg"
                                className="stats-icon"
                                alt="Clean Dashboards"
                              />
                              <h5>America</h5>
                              <h3>$9200</h3>
                            </div>
                          </div>
                          <div className="col-sm-4 col-12">
                            <div className="info-stats">
                              <img
                                src="assets/images/flags/1x1/br.svg"
                                className="stats-icon"
                                alt="Admin Panels"
                              />
                              <h5>Brazil</h5>
                              <h3>$6700</h3>
                            </div>
                          </div>
                          <div className="col-sm-4 col-12">
                            <div className="info-stats">
                              <img
                                src="assets/images/flags/1x1/gb.svg"
                                className="stats-icon"
                                alt="Admin Panels"
                              />
                              <h5>Great Britain</h5>
                              <h3>$5800</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Orders</div>
                      </div>
                      <div className="card-body">
                        <div id="orders"></div>
                        <div className="row">
                          <div className="col-sm-4 col-12">
                            <div className="info-stats">
                              <img
                                src="assets/images/flags/1x1/in.svg"
                                className="stats-icon"
                                alt="Google Dashboards"
                              />
                              <h5>India</h5>
                              <h3>3200</h3>
                            </div>
                          </div>
                          <div className="col-sm-4 col-12">
                            <div className="info-stats">
                              <img
                                src="assets/images/flags/1x1/de.svg"
                                className="stats-icon"
                                alt="Germany"
                              />
                              <h5>Germany</h5>
                              <h3>2700</h3>
                            </div>
                          </div>
                          <div className="col-sm-4 col-12">
                            <div className="info-stats">
                              <img
                                src="assets/images/flags/1x1/mx.svg"
                                className="stats-icon"
                                alt="Mexico"
                              />
                              <h5>Mexico</h5>
                              <h3>1500</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xxl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">By Channel</div>
                      </div>
                      <div className="card-body">
                        <div id="byChannel" className="chart-height-xl"></div>
                        <div className="num-stats mb-3">
                          <h2>4710</h2>
                          <h6 className="text-truncate">
                            18% higher than last month.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">By Counrty</div>
                      </div>
                      <div className="card-body">
                        <div id="byCountry" className="chart-height-xl"></div>
                        <div className="num-stats mb-3">
                          <h2>7520</h2>
                          <h6 className="text-truncate">
                            12% higher than last month.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">By Device</div>
                      </div>
                      <div className="card-body">
                        <div
                          id="byDevice"
                          className="chart-height-xl auto-align-graph"
                        ></div>
                        <div className="num-stats mb-3">
                          <h2>2100</h2>
                          <h6 className="text-truncate">
                            25% higher than last month.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xxl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Visitors</div>
                      </div>
                      <div className="card-body">
                        <div id="visitors" className="chart-height-xl"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Demography</div>
                      </div>
                      <div className="card-body">
                        <div
                          id="demography"
                          className="chart-height-xl auto-align-graph"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Results</div>
                      </div>
                      <div className="card-body">
                        <div id="results" className="chart-height-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xxl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Income</div>
                      </div>
                      <div className="card-body">
                        <div className="scroll370">
                          <div className="income-stats-container">
                            <div className="income-stats">
                              <div className="income-graph">
                                <div
                                  id="overallSales"
                                  className="svg-container"
                                ></div>
                              </div>
                              <div className="income-info">
                                <h3>
                                  75<sup>k</sup>
                                </h3>
                                <p>Overall Sales</p>
                              </div>
                              <div className="income-high-low">
                                18%{" "}
                                <span className="bi bi-caret-up-fill text-green"></span>
                              </div>
                            </div>
                            <div className="income-stats">
                              <div className="income-graph">
                                <div
                                  id="overallExpenses"
                                  className="svg-container"
                                ></div>
                              </div>
                              <div className="income-info">
                                <h3>
                                  33<sup>k</sup>
                                </h3>
                                <p>Overall Expenses</p>
                              </div>
                              <div className="income-high-low">
                                7%{" "}
                                <span className="bi bi-caret-down-fill text-red"></span>
                              </div>
                            </div>
                            <div className="income-stats">
                              <div className="income-graph">
                                <div
                                  id="overallIncome"
                                  className="svg-container"
                                ></div>
                              </div>
                              <div className="income-info">
                                <h3>
                                  42<sup>k</sup>
                                </h3>
                                <p>Overall Income</p>
                              </div>
                              <div className="income-high-low">
                                21%{" "}
                                <span className="bi bi-caret-up-fill text-green"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Tickets</div>
                      </div>
                      <div className="card-body">
                        <div className="scroll370">
                          <ul className="tickets-container">
                            <li>
                              <img
                                src="assets/images/user.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Chandni Issac</h4>
                                <h5>New contract template design</h5>
                                <p className="ticket-time">05/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-green">Completed</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user5.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Donna Miller</h4>
                                <h5>Quarter budget analysis</h5>
                                <p className="ticket-time">12/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-blue">Processing</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user4.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>William Brown</h4>
                                <h5>Launch marketing campaign</h5>
                                <p className="ticket-time">18/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-blue">Processing</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user3.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Laura Morgan</h4>
                                <h5>New estimation finance inc project</h5>
                                <p className="ticket-time">21/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-blue">Processing</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user2.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Nancy Bell</h4>
                                <h5>Create user journey and interaction flows</h5>
                                <p className="ticket-time">25/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-red">Pending</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user4.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Raymond Miller</h4>
                                <h5>
                                  Download last month Adobe creative cloud invoice.
                                </h5>
                                <p className="ticket-time">21/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-blue">Processing</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user3.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Jacob White</h4>
                                <h5>Report a bug to infinity support.</h5>
                                <p className="ticket-time">25/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-red">Pending</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user5.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Grace Cooper</h4>
                                <h5>Campaign performance tracking.</h5>
                                <p className="ticket-time">21/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-blue">Processing</span>
                              </div>
                            </li>
                            <li>
                              <img
                                src="assets/images/user.png"
                                className="avatar"
                                alt="Admin Dashboards"
                              />
                              <div className="ticket-details">
                                <h4>Michelle Taylor</h4>
                                <h5>
                                  Design email template and send to dev team for
                                  approval.
                                </h5>
                                <p className="ticket-time">25/12/2021</p>
                              </div>
                              <div className="ticket-status">
                                <span className="badge shade-red">Pending</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Deals</div>
                      </div>
                      <div className="card-body">
                        <div id="deals"></div>

                        <div className="row">
                          <div className="col-sm-6 col-6">
                            <div className="info-stats">
                              <h5>Claimed</h5>
                              <h3>3200</h3>
                            </div>
                          </div>
                          <div className="col-sm-6 col-6">
                            <div className="info-stats">
                              <h5>Expired</h5>
                              <h3>1500</h3>
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

          <div class="app-footer">
            <span>© Arise admin 2023</span>
          </div>

        </div>

      </div>

    </div>


      
    </>
  );
};
