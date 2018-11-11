import React, {Component} from 'react';
import {cn} from '@bem-react/classname'
import '../style.css';
import Logo from "../assets/Logo@2x-min.png";

export class Header extends Component {
    cnHeader = cn('Header');
    cnIcon = cn('Icon');
    navList = <ul className="Header-Nav-List">
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
    </ul>;

    render() {
        return (
            <header className="Header">
                <div className={this.cnHeader('Logo')}>
                    <img className="Logo"
                         src={Logo} alt="Logo"/>
                </div>
                <nav className={this.cnHeader('Nav')}>
                    {this.navList}
                </nav>
            </header>

        );
    }
}

