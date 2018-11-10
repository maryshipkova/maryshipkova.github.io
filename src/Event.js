import React, {Component, Fragment} from 'react';
import './style.css';
import RichDataImg from './assets/Richdata.png';

class Events extends Component {

    data = {
        "events": [
            {
                "type": "info",
                "title": "Еженедельный отчет по расходам ресурсов",
                "source": "Сенсоры потребления",
                "time": "19:00, Сегодня",
                "description": "Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",
                "icon": "stats",
                "data": {
                    "type": "graph",
                    "values": [
                        {
                            "electricity": [
                                ["1536883200", 115],
                                ["1536969600", 117],
                                ["1537056000", 117.2],
                                ["1537142400", 118],
                                ["1537228800", 120],
                                ["1537315200", 123],
                                ["1537401600", 129]
                            ]
                        },
                        {
                            "water": [
                                ["1536883200", 40],
                                ["1536969600", 40.2],
                                ["1537056000", 40.5],
                                ["1537142400", 41],
                                ["1537228800", 41.4],
                                ["1537315200", 41.9],
                                ["1537401600", 42.6]
                            ]
                        },
                        {
                            "gas": [
                                ["1536883200", 13],
                                ["1536969600", 13.2],
                                ["1537056000", 13.5],
                                ["1537142400", 13.7],
                                ["1537228800", 14],
                                ["1537315200", 14.2],
                                ["1537401600", 14.5]
                            ]
                        }
                    ]
                },
                "size": "l"
            },
            {
                "type": "info",
                "title": "Дверь открыта",
                "source": "Сенсор входной двери",
                "time": "18:50, Сегодня",
                "description": null,
                "icon": "key",
                "size": "s"
            },
            {
                "type": "info",
                "title": "Уборка закончена",
                "source": "Пылесос",
                "time": "18:45, Сегодня",
                "description": null,
                "icon": "robot-cleaner",
                "size": "s"
            },
            {
                "type": "info",
                "title": "Новый пользователь",
                "source": "Роутер",
                "time": "18:45, Сегодня",
                "description": null,
                "icon": "router",
                "size": "s"
            },
            {
                "type": "info",
                "title": "Изменен климатический режим",
                "source": "Сенсор микроклимата",
                "time": "18:30, Сегодня",
                "description": "Установлен климатический режим «Фиджи»",
                "icon": "thermal",
                "size": "m",
                "data": {
                    "temperature": 24,
                    "humidity": 80
                }
            },
            {
                "type": "critical",
                "title": "Невозможно включить кондиционер",
                "source": "Кондиционер",
                "time": "18:21, Сегодня",
                "description": "В комнате открыто окно, закройте его и повторите попытку",
                "icon": "ac",
                "size": "m"
            },
            {
                "type": "info",
                "title": "Музыка включена",
                "source": "Яндекс.Станция",
                "time": "18:16, Сегодня",
                "description": "Сейчас проигрывается:",
                "icon": "music",
                "size": "m",
                "data": {
                    "albumcover": "https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000",
                    "artist": "Florence & The Machine",
                    "track": {
                        "name": "Big God",
                        "length": "4:31"
                    },
                    "volume": 80
                }
            },
            {
                "type": "info",
                "title": "Заканчивается молоко",
                "source": "Холодильник",
                "time": "17:23, Сегодня",
                "description": "Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",
                "icon": "fridge",
                "size": "m",
                "data": {
                    "buttons": ["Да", "Нет"]
                }
            },
            {
                "type": "info",
                "title": "Зарядка завершена",
                "source": "Оконный сенсор",
                "time": "16:22, Сегодня",
                "description": "Ура! Устройство «Оконный сенсор» снова в строю!",
                "icon": "battery",
                "size": "s"
            },
            {
                "type": "critical",
                "title": "Пылесос застрял",
                "source": "Сенсор движения",
                "time": "16:17, Сегодня",
                "description": "Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",
                "icon": "cam",
                "data": {
                    "image": "get_it_from_mocks_:3.jpg"
                },
                "size": "l"
            },
            {
                "type": "info",
                "title": "Вода вскипела",
                "source": "Чайник",
                "time": "16:20, Сегодня",
                "description": null,
                "icon": "kettle",
                "size": "s"
            }
        ]
    };

    events = this.data.events.map((event, i) => {
        const description = event.description ?
            <div className="Card-Description">
                <p className="Card_paragraph">
                    {event.description}
                </p>
            </div> : <Fragment></Fragment>;

        let cardData = <Fragment></Fragment>;

        if (event.data) {
            let innerData = <Fragment></Fragment>;
            if (event.data.type === 'graph') {
                innerData = <div className="CardData-Graph">
                    <img className="CardData-ImageBox-Image" src={RichDataImg} alt="Richdata.png"
                         touch-action="none"/>
                </div>;
            } else if (event.data.image) {
                innerData = <div className="CardData-image-box">
                    <div className="CardData-ImageBox">
                        <img className="CardData-ImageBox-Image" src={`../assets/${event.data.image}.jpg`}
                             alt={event.data.image} touch-action="none"/>
                    </div>
                    <div className="CardData-ImageBox-Settings">
                        <div className="CardData-ImageBox-Settings_zoom">
                                    <span className="Card_imageSettings">Приближение: <span
                                        className="Settings_zoom">100</span>%</span>
                        </div>
                        <div className="CardData-ImageBox-Settings_brightness">
                                    <span className="Card_imageSettings">Яркость: <span
                                        className="Settings_brightness">100</span>%</span>
                        </div>
                        <input type="range" className="Music-Track-Range Settings-Range" min="-100" max="100"
                               value="0"/>
                    </div>
                </div>;
            } else if (event.data.temperature) {
                innerData = <div className="CardData-Climate">
                    <div className="CardData-Temperature">
                        <p className="CardData_climate">
                                <span className="CardData_climate Text_bold">
                                    {event.data.temperature}
                                </span>
                        </p>
                    </div>
                    <div className="CardData-humidity">
                        <p className="CardData_climate">
                                <span className="CardData_climate Text_bold">
                                    {event.data.humidity}
                                </span>
                        </p>
                    </div>
                </div>;
            } else if (event.data.albumcover) {
                innerData = <div className="CardData-Music Music">
                    <div className="Music-header">
                        <div className="CardData-Albumcover">
                            <img className="CardData-Albumcover-Image" src={event.data.albumcover}
                                 alt={event.data.albumcover}/>
                        </div>

                        <div className="Music-Main">
                            <div className="CardData-Artist">
                                <p className="CardData_musicTitle">
                                    {event.data.artist} - {event.data.track.name}
                                </p>
                            </div>
                            <div className="Music-Track">
                                <input type="range" className="Music-Track-Range"/>
                                <div className="CardData-Track-Length Music-Track-Length">
                                    <p className="CardData_music">
                                        {event.data.track.length}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="Music-Player">
                        <div className="Music-Icons">
                            <div className="Music-Icons-Item">
                                <svg className="Icon_music">
                                    <use xlinkHref="./assets/Prev.svg#Events"></use>
                                </svg>
                            </div>
                            <div className="Music-Icons-Item">
                                <svg className="Icon_music Icon_rotated">
                                    <use xlinkHref="./assets/Prev.svg#Events"></use>
                                </svg>
                            </div>
                        </div>

                        <input type="range" className="Music-Player-Range"/>
                        <div className="CardData-Volume">
                            <p className="CardData-Music">
                                {event.data.volume}
                            </p>
                        </div>
                    </div>
                </div>;
            } else if (event.data.buttons) {
                innerData = <div className="CardData-Buttons">
                    <button className="CardData-Buttons_btn">
                            <span className="CardData_paragraph Text_bold">
                                {event.data.buttons[0]}
                             </span>
                    </button>
                    <button className="CardData-Buttons_btn">
                            <span className="CardData_paragraph Text_bold">
                                {event.data.buttons[1]}
                             </span>
                    </button>
                </div>;
            }

            cardData = <div className="Card-Data CardData">{innerData}</div>
        }

        return <div className={`Card Card_${event.size}`} key={i}>
            <div className="Card-HoverIcon Card-HoverIcon_top">
                <svg className="Icon_card_hover">
                    <use xlinkHref="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div className="Card-HoverIcon  Card-HoverIcon_bottom">
                <svg className="Icon_card_hover">
                    <use xlinkHref="assets/Next.svg#Events"></use>
                </svg>
            </div>

            <div className={`Card-Type-Top Card_${event.type}`}>
                <div className="Card-Header">
                    <div className="Card-icon">
                        <svg className="Icon_card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid">
                            <use xlinkHref={`assets/${event.icon}.svg#Events`}></use>
                        </svg>
                    </div>
                    <div className="Card-Title">
                        <h2 className="Card_heading">
                            {event.title}
                        </h2>
                    </div>
                </div>

                <div className="Card-Source">
                    <h3 className="Card_sourceText">
                        {event.source}
                    </h3>
                </div>
                <div className="Card-time">
                    <h3 className="Card_timeText">
                        {event.time}
                    </h3>
                </div>
            </div>
            <div className="Card-Type-Bottom Card_info">
                {description}
                {cardData}
            </div>

        </div>
    });

    render() {
        return (
            <Fragment>{this.events}</Fragment>

        );
    }
}

export default Events;
