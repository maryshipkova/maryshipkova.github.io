import React, {Component, Fragment} from 'react';
import {cn} from '@bem-react/classname'
import './style.css';
import Logo from "./assets/Logo@2x-min.png";

class Header extends Component {
    cnHeader = cn('Header');
    cnIcon = cn('Icon');

    render() {
        return (
            <Fragment>
                <div className={this.cnHeader('Logo')}>
                    <img className="Logo"
                         src={Logo} alt="Logo"/>
                </div>
                <nav className={this.cnHeader('Nav')}>
                    <label htmlFor="header-toggle" className={this.cnHeader('Nav-Toggle')}>
                        <img srcSet="./assets/icon_list_m-min.png 1x, ./assets/icon_list_m@2x-min.png 2x"
                             src="./assets/icon_list_m-min.png"
                             alt="Icon_headerNav" className={this.cnIcon('HeaderNav')}/>
                    </label>
                    <input type="checkbox" className={this.cnHeader('Nav-Checkbox')} id="header-toggle"/>
                    <ul className="Header-Nav-List">
                        <li className="Header-Nav-Item">
                            <a href="#events" className={this.cnHeader('Nav-Link')}>События</a>
                        </li>
                        <li className="Header-Nav-Item">
                            <a href="#events" className={this.cnHeader('Nav-Link')}>Сводка</a>
                        </li>
                        <li className="Header-Nav-Item">
                            <a href="#events" className={this.cnHeader('Nav-Link')}>Устройства</a>
                        </li>
                        <li className="Header-Nav-Item">
                            <a href="#events" className={this.cnHeader('Nav-Link')}>Сценарии</a>
                        </li>
                    </ul>
                </nav>
            </Fragment>

        );
    }
}

export default Header;
