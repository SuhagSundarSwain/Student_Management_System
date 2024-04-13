import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

const Header = () => {
  const userInfo = useSelector((store) => store.userInfo);
  return (
    <header className="p-3 text-bg-dark">
      <div className="container" style={{ margin: "0px" }}>
        <div
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
          style={{ width: "95vw" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/bd/Odisha_University_of_Technology_and_Research_Logo.png"
              className="bi me-2"
              width="60"
              height="60"
              role="img"
              aria-label="Bootstrap"
            />
          </a>

          <ul
            className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            style={{ marginLeft: "auto" }}
          >
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Fee-Structure
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            {userInfo.loggedInStatus ? (
              <LogoutButton />
            ) : (
              <>
                <LoginButton />
                <SignupButton />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
