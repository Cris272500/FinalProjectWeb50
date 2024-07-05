import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <>
    
    <nav className="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="index.html" className="logo">
              <img src="assets/images/logo.svg" alt="Admin Dashboards" />
            </Link>
          </div>

          <div className="sidebar-menu">
            <div className="sidebarMenuScroll">
              <ul>
                <li className="sidebar-dropdown active">
                  <Link to="#">
                    <i className="bi bi-house"></i>
                    <span className="menu-text">Dashboards</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="index.html" className="current-page">
                          Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="reports.html">Reports</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-handbag"></i>
                    <span className="menu-text">Product</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="orders.html">Order History</Link>
                      </li>
                      <li>
                        <Link to="products.html">Products</Link>
                      </li>
                      <li>
                        <Link to="view-cart.html">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="checkout.html">Billing Details</Link>
                      </li>
                      <li>
                        <Link to="customers.html">Customers</Link>
                      </li>
                      <li>
                        <Link to="add-product.html">Add Product</Link>
                      </li>
                      <li>
                        <Link to="reviews.html">Reviews</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-gem"></i>
                    <span className="menu-text">Widgets</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="widgets.html">Widgets</Link>
                      </li>
                      <li>
                        <Link to="graph-widgets.html">Graph Widgets</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-collection"></i>
                    <span className="menu-text">UI Elements</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="accordions.html">Accordions</Link>
                      </li>
                      <li>
                        <Link to="alerts.html">Alerts</Link>
                      </li>
                      <li>
                        <Link to="buttons.html">Buttons</Link>
                      </li>
                      <li>
                        <Link to="badges.html">Badges</Link>
                      </li>
                      <li>
                        <Link to="cards.html">Cards</Link>
                      </li>
                      <li>
                        <Link to="carousel.html">Carousel</Link>
                      </li>
                      <li>
                        <Link to="dropdowns.html">Dropdowns</Link>
                      </li>
                      <li>
                        <Link to="icons.html">Icons</Link>
                      </li>
                      <li>
                        <Link to="modals.html">Modals</Link>
                      </li>
                      <li>
                        <Link to="offcanvas.html">Off Canvas</Link>
                      </li>
                      <li>
                        <Link to="progress.html">Progress Bars</Link>
                      </li>
                      <li>
                        <Link to="spinners.html">Spinners</Link>
                      </li>
                      <li>
                        <Link to="tabs.html">Tabs</Link>
                      </li>
                      <li>
                        <Link to="tooltips.html">Tooltips</Link>
                      </li>
                      <li>
                        <Link to="typography.html">Typography</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-stickies"></i>
                    <span className="menu-text">Pages</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="profile.html">Profile</Link>
                      </li>
                      <li>
                        <Link to="account-settings.html">Account Settings</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="calendar.html">
                    <i className="bi bi-calendar4"></i>
                    <span className="menu-text">Calendar</span>
                  </Link>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-columns-gap"></i>
                    <span className="menu-text">Forms</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="form-inputs.html">Form Inputs</Link>
                      </li>
                      <li>
                        <Link to="form-checkbox-radio.html">
                          Checkbox &amp; Radio
                        </Link>
                      </li>
                      <li>
                        <Link to="form-file-input.html">File Input</Link>
                      </li>
                      <li>
                        <Link to="form-validations.html">Validations</Link>
                      </li>
                      <li>
                        <Link to="bs-select.html">Bootstrap Select</Link>
                      </li>
                      <li>
                        <Link to="date-time-pickers.html">Date Time Pickers</Link>
                      </li>
                      <li>
                        <Link to="input-mask.html">Input Masks</Link>
                      </li>
                      <li>
                        <Link to="editor.html">Editor</Link>
                      </li>
                      <li>
                        <Link to="form-layout1.html">Form Layout</Link>
                      </li>
                      <li>
                        <Link to="form-layout2.html">Form Layout 2</Link>
                      </li>
                      <li>
                        <Link to="form-layout3.html">Form Layout 3</Link>
                      </li>
                      <li>
                        <Link to="form-layout4.html">Form Horizontal</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-window-split"></i>
                    <span className="menu-text">Tables</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="tables.html">Tables</Link>
                      </li>
                      <li>
                        <Link to="data-tables.html">Data Tables</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-pie-chart"></i>
                    <span className="menu-text">Graphs &amp; Maps</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="apex.html">Apex</Link>
                      </li>
                      <li>
                        <Link to="morris.html">Morris</Link>
                      </li>
                      <li>
                        <Link to="maps.html">Maps</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-layout-sidebar"></i>
                    <span className="menu-text">Layouts</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="layout.html">Default Layout</Link>
                      </li>
                      <li>
                        <Link to="layout-grid.html">Grid Layout</Link>
                      </li>
                      <li>
                        <Link to="layout-welcome.html">Welcome Layout</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="bi bi-x-diamond"></i>
                    <span className="menu-text">Authentication</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="login.html">Login</Link>
                      </li>
                      <li>
                        <Link to="signup.html">Signup</Link>
                      </li>
                      <li>
                        <Link to="error.html">Error</Link>
                      </li>
                      <li>
                        <Link to="maintenance.html">Maintenance</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="starter-page.html">
                    <i className="bi bi-hand-index-thumb"></i>
                    <span className="menu-text">Link</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    </>
  )
}
