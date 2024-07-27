import "./style.css";
import { BsBlockquoteRight } from "react-icons/bs";

const Appbar = () => {
    return (
        <div>
           <nav>
            <input type="checkbox" className="myCheckBox" id="myCheck"></input>
            <label className="checkButton">
            <BsBlockquoteRight  />
                <i className="fa fa-bars"></i>
                </label> 
            <label className="logo">Navbarx</label>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Content</a></li>
                <li><a href="">Pages</a></li>
               
            </ul>
            </nav> 
        </div>
    );
};

export default Appbar;