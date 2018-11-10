import React, {Component, Fragment} from 'react';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <ul className="Footer-List">
                    <li className="Footer-Item">
                        <a href="#events" className="Text_footer">Помощь</a>
                    </li>
                    <li className="Footer-Item">
                        <a href="#events" className="Text_footer">Обратная связь</a>
                    </li>
                    <li className="Footer-Item">
                        <a href="#events" className="Text_footer">Разработчикам</a>
                    </li>
                    <li className="Footer-Item">
                        <a href="#events" className="Text_footer">Условия использования</a>
                    </li>
                    <li className="Footer-Item">
                        <a target="blank"
                           href="https://docviewer.yandex.ru/view/1130000031416100/?*=0XCqW4FslxHh%2FIKRNc5ABV7dPqh7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMDAiLCJ5dSI6IjIzMTQyNzc1NDE1MTIyOTMwMDkiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4ODQxMjA5NjIzfQ%3D%3D"
                           className="Text_footer">Лицензия</a>
                    </li>

                    <li className="Footer-Item">
                        <a href="#events" className="Text_footer">&copy; 2001–2017 ООО «Яндекс»</a>
                    </li>
                </ul>
            </Fragment>

        );
    }
}

export default Footer;
