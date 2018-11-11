import React from 'react';
import '../style.css';
import Logo from "../assets/Logo@2x-min.png";
import {Header as HeaderCommon} from './Header@desktop'

export class Header extends HeaderCommon {

    render() {
        return (
            <header className="Header">
                <div className={this.cnHeader('Logo')}>
                    <img className="Logo"
                         src={Logo} alt="Logo"/>
                </div>
                <nav className={this.cnHeader('Nav')}>
                    <label htmlFor="header-toggle" className={this.cnHeader('Nav-Toggle')}>
                        <img
                            srcSet={`${require("../assets/icon_list_m-min.png")} 1x, ${require("../assets/icon_list_m@2x-min.png")} 2x`}
                            src={require(`../assets/icon_list_m-min.png`)}
                            alt="Icon_headerNav" className={this.cnIcon('HeaderNav')}/>
                    </label>
                    <input type="checkbox" className={this.cnHeader('Nav-Checkbox')} id="header-toggle"/>
                    {this.navList}
                </nav>
            </header>

        );
    }
}

