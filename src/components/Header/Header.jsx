import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const mobile = window.innerWidth <= 768;

  return (
    <header className="header">
      <img src={Logo} alt="logo" className="logo" />
      {!menu && mobile ? (
        <div
          onClick={() => setMenu(!menu)}
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt="mobile-menu"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="join"
              span={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
