import { Link } from "react-router-dom";

export const RegisterNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
        <div className="container">
          <Link
            className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white"
            to="/"
          >
            NetHelp
          </Link>
          <button
            className="navbar-toggler shadow-none ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center me-2 active"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa fa-chart-pie opacity-6  me-1"></i>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/">
                  <i className="fa fa-user opacity-6  me-1"></i>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/">
                  <i className="fas fa-user-circle opacity-6  me-1"></i>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/">
                  <i className="fas fa-key opacity-6  me-1"></i>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
