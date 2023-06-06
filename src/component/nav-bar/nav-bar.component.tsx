import { Link } from "react-router-dom";
import Logo from "../../assets/Unionlogo.svg";
import LogoName from "../../assets/lendsqrlogo.svg";
import { BiSearch, BiCaretDown } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <section className="logo">
        <img src={Logo} alt="" />
        <img src={LogoName} alt="" />
      </section>
      <section className="search">
        <input type="text" placeholder="Search for anything" className="search-bar"/>
        <button type="submit" className="search-button">
          <BiSearch />
        </button>
      </section>
      <section className="data">
        <Link to="/doc">Doc</Link>
        <button type="button" >
          <BsBell />
        </button>
        <section className="profile">
          <img src="https://picsum.photos/200" alt="" />
          <span>Adedeji <BiCaretDown /></span>
        </section>
      </section>
    </nav>
  );
};

export default NavBar;
