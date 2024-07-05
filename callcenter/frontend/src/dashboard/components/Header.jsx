export const Header = () => {
  return (
    <>
    
    <div className="page-header">
            <div className="toggle-sidebar" id="toggle-sidebar">
              <i className="bi bi-list"></i>
            </div>

            <ol className="breadcrumb d-md-flex d-none">
              <li className="breadcrumb-item">
                <i className="bi bi-house"></i>
                <a href="index.html">Home</a>
              </li>
              <li
                className="breadcrumb-item breadcrumb-active"
                aria-current="page"
              >
                Sales
              </li>
            </ol>

            <div className="header-actions-container">
              <div className="search-container">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search anything"
                  />
                  <button className="btn" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              <a href="orders.html" className="leads d-none d-xl-flex">
                <div className="lead-details">
                  You have <span className="count"> 21 </span> new leads{" "}
                </div>
                <span className="lead-icon">
                  <i className="bi bi-bell-fill animate__animated animate__swing animate__infinite infinite"></i>
                  <b className="dot animate__animated animate__heartBeat animate__infinite"></b>
                </span>
              </a>

              <ul className="header-actions">
                <li className="dropdown d-none d-md-block">
                  <a
                    href="#"
                    id="countries"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <img
                      src="assets/images/flags/1x1/br.svg"
                      className="flag-img"
                      alt="Admin Panels"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end mini"
                    aria-labelledby="countries"
                  >
                    <div className="country-container">
                      <a href="index.html">
                        <img
                          src="assets/images/flags/1x1/us.svg"
                          alt="Clean Admin Dashboards"
                        />
                      </a>
                      <a href="index.html">
                        <img
                          src="assets/images/flags/1x1/in.svg"
                          alt="Google Dashboards"
                        />
                      </a>
                      <a href="index.html">
                        <img
                          src="assets/images/flags/1x1/gb.svg"
                          alt="AI Admin Dashboards"
                        />
                      </a>
                      <a href="index.html">
                        <img
                          src="assets/images/flags/1x1/tr.svg"
                          alt="Modern Dashboards"
                        />
                      </a>
                      <a href="index.html">
                        <img
                          src="assets/images/flags/1x1/ca.svg"
                          alt="Best Admin Dashboards"
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    id="userSettings"
                    className="user-settings"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <span className="user-name d-none d-md-block">
                      Abigale Heaney
                    </span>
                    <span className="avatar">
                      <img src="assets/images/user.png" alt="Admin Templates" />
                      <span className="status online"></span>
                    </span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userSettings"
                  >
                    <div className="header-profile-actions">
                      <a href="profile.html">Profile</a>
                      <a href="account-settings.html">Settings</a>
                      <a href="login.html">Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    
    </>
  )
}
