import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Page1">Page1 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Page2">Page2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Page3">Page3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Se">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Slide">Slide</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}export default Header;