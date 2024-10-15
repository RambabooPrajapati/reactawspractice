import "./header.css";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <img className="imageLogo" src="AHSS LOGO.png" alt="AHSS_logo...."></img>
      <ul className="ulContainer">
        <li><Link to={"/promise"}>Promise Component</Link></li>
        <li><Link to={"/hoc"}>HOC</Link></li>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        <li><Link to={"/signup"}>Signup</Link></li>
        <li><Link to={"/profile"}>Profile</Link></li>
      </ul>
    </div>
  )
}

export default Header
