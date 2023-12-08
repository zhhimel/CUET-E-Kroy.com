import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="top_nav_container">
              <div className="contact_nav">
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call : +01 123455678990</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Email : demo@gmail.com</span>
                </a>
              </div>
              <from className="search_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
                <button className="" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </from>
              <div className="user_option_box">
                <a href="" className="account-link">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>My Account</span>
                </a>
                <a href="/signin" className="cart-link">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span>Sign In</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>Minics</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <a className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Product">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Cart">
                      Cart
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
