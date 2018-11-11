import React, {Component} from 'react';
import '../style.css';
import {cn} from '@bem-react/classname'

class Footer extends Component {
    cnFooter = cn('Footer');
    cnText = cn('Text');
    render() {
        return (
            <footer className="Footer">
                <ul className={this.cnFooter('List')}>
                    <li className={this.cnFooter('Item')}>
                        <a href="#events" className={this.cnText({type:'footer'})}>Помощь</a>
                    </li>
                    <li className={this.cnFooter('Item')}>
                        <a href="#events" className={this.cnText({type:'footer'})}>Обратная связь</a>
                    </li>
                    <li className={this.cnFooter('Item')}>
                        <a href="#events" className={this.cnText({type:'footer'})}>Разработчикам</a>
                    </li>
                    <li className={this.cnFooter('Item')}>
                        <a href="#events" className={this.cnText({type:'footer'})}>Условия использования</a>
                    </li>
                    <li className={this.cnFooter('Item')}>
                        <a target="blank"
                           href="https://docviewer.yandex.ru/view/1130000031416100/?*=0XCqW4FslxHh%2FIKRNc5ABV7dPqh7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMDAiLCJ5dSI6IjIzMTQyNzc1NDE1MTIyOTMwMDkiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4ODQxMjA5NjIzfQ%3D%3D"
                           className={this.cnText({type:'footer'})}>Лицензия</a>
                    </li>

                    <li className={this.cnFooter('Item')}>
                        <a href="#events" className={this.cnText({type:'footer'})}>&copy; 2001–2017 ООО «Яндекс»</a>
                    </li>
                </ul>
            </footer>

        );
    }
}

export default Footer;
