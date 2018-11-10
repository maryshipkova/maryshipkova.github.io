import React, {Component, Fragment} from 'react';
import './style.css';
import Logo from "./assets/Logo@2x-min.png";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="Header-Logo">
                    <img className="Logo"
                         src={Logo} alt="Logo"/>
                </div>
                <nav className="Header-Nav">
                    <label htmlFor="header-toggle" className="Header-Nav-Toggle">
                        <img srcSet="./assets/icon_list_m-min.png 1x, ./assets/icon_list_m@2x-min.png 2x"
                             src="./assets/icon_list_m-min.png"
                             alt="Icon_headerNav" className="Icon_headerNav"/>
                    </label>
                    <input type="checkbox" className="Header-Nav-Checkbox" id="header-toggle"/>
                    <ul className="Header-Nav-List">
                        <li className="Header-Nav-Item">
                            <a href="#events" className="Header-Nav-Link">События</a>
                        </li>
                        <li className="Header-Nav-Item">
                            <a href="#events" className="Header-Nav-Link">Сводка</a>
                        </li>
                        <li className="Header-Nav-Item">
                            <a href="#events" className="Header-Nav-Link">Устройства</a>
                        </li>
                        <li className="Header-Nav-Item">
                            <a href="#events" className="Header-Nav-Link">Сценарии</a>
                        </li>
                    </ul>
                </nav>
            </Fragment>

        );
    }
}

export default Header;
