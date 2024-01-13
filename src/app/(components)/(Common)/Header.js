import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="top_nav_container">
              <div className="contact_nav">
                <Link href="#">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call : +8801910525410</span>
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>Email : u1904095@student.cuet.ac.bd</span>
                  </span>
                </Link>
              </div>
              <form className="search_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
                <button className="" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <div className="user_option_box">
                <Link href="#">
                  <span className="account-link">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>My Account</span>
                  </span>
                </Link>
                <Link href="/signin">
                  <span className="cart-link">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>Sign In</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link href="/" className="navbar-brand">
                <span>CUET-E-Kroy.com</span>
                
              </Link>

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
                    <Link href="/">
                      <span className="nav-link">
                        Home <span className="sr-only">(current)</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/About">
                      <span className="nav-link">About</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Products">
                      <span className="nav-link">Products</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Carts">
                      <span className="nav-link">Cart</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Testimonial">
                      <span className="nav-link">Testimonial</span>
                    </Link>
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
