import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-4 mx-auto text-center">
            <Link
              to="/register"
              target="_blank"
              className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            >
              Company
            </Link>
            <Link
              to="/register"
              target="_blank"
              className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            >
              About Us
            </Link>
            <Link
              to="/register"
              target="_blank"
              className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            >
              Team
            </Link>
            <Link
              to="/register"
              target="_blank"
              className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            >
              Products
            </Link>
            <Link
              to="/register"
              target="_blank"
              className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            >
              Blog
            </Link>
            <Link
              to="/register"
              target="_blank"
              className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            >
              Pricing
            </Link>
          </div>
          <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
            
            <Link
              to="https://github.com/Cris272500"
              target="_blank"
              className="text-secondary me-xl-4 me-4"
            >
              <span className="text-lg fab fa-github"></span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto text-center mt-1">
            <p className="mb-0 text-secondary">
              Copyright © {year} Soft by @Cris272500.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
