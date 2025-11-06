import "./../css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Navigation = () => {

    //Shows whatever is in this variable, which in this case is hide-small, which will hide stuff
    //Can also be made into a boolean, in which if its true, then open the menu, if false, then hide it
    const [menuOpen, setmenuOpen] = useState(false);
    const [arrow, setArrow] = useState(true);

    const toggleMenu = () => {
        setmenuOpen(!menuOpen);
        setArrow(!arrow);
    }

    return (
    <nav id="main-nav">
        <a onClick={toggleMenu} id="up-arrow" href="#">{arrow?"↓":"↑"}</a>
        {/*If true, keep it open, if false, then use hide-small*/}
        <ul className ={menuOpen?"":"hide-small"}>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/houses">Houses</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
        </ul>
    </nav>
    )
};

export default Navigation;