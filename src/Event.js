import React, {Component, Fragment} from 'react';
import './style.css';
import {cn} from "@bem-react/classname";


class Events extends Component {
    cnCard = cn('Card');
    cnCardData = cn('CardData');
    cnText = cn('Text');
    cnIcon = cn('Icon');
    cnMusic = cn('Music');
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
                    "image": "cleaner.jpg"
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
            <div className={this.cnCard('Description')}>
                <p className={this.cnText('Card', {type: 'paragraph'})}>
                    {event.description}
                </p>
            </div> : <Fragment></Fragment>;

        let cardData = <Fragment></Fragment>;

        if (event.data) {
            let innerData = <Fragment></Fragment>;
            if (event.data.type === 'graph') {
                innerData = <div className={this.cnCardData('Graph')}>
                    <img className={this.cnCardData('ImageBox-Image')} src={require(`./assets/Richdata.png`)} alt="Richdata.png"
                         touch-action="none"/>
                </div>;
            } else if (event.data.image) {
                innerData =
                    <div className={this.cnCardData('ImageBox')}>
                        <div className={this.cnCardData('Image')}>
                            <img className={this.cnCardData('Image-Item')} src={require(`./assets/${event.data.image}`)}
                                 alt={event.data.image} touch-action="none"/>
                        </div>
                        <div className={this.cnCardData('ImageBox-Settings')}>
                            <div className={this.cnCardData('ImageBox-Settings', {type: 'zoom'})}>
                                    <span className={this.cnText('Card', {type: 'settings'})}>Приближение: <span
                                        className={this.cnText('Card-', {type: 'settings_zoom'})}>100</span>%</span>
                            </div>
                            <div className={this.cnCardData('ImageBox-Settings', {type: 'brightness'})}>
                                    <span className={this.cnText('Card', {type: 'settings'})}>Яркость: <span
                                        className={this.cnText('Card-', {type: 'settings_brightness'})}>100</span>%</span>
                            </div>
                            <input type="range"
                                   className={`${this.cnMusic('Track-Range')} ${this.cnCardData('Settings-Range')}`}
                                   min="-100" max="100"
                                   value="0"/>
                        </div>
                    </div>;
            } else if (event.data.temperature) {
                innerData = <div className={this.cnCardData('Climate')}>
                    <div className={this.cnCardData('Temperature')}>
                        <p className={this.cnText('CardData', {type: 'climate'})}>
                            {'Температура: '}
                            <span
                                className={`${this.cnText('CardData', {type: 'climate'})} ${this.cnText({type: "bold"})}`}>
                                    {event.data.temperature + " C"}
                                </span>

                        </p>
                    </div>
                    <div className={this.cnCardData('Humidity')}>
                        <p className={this.cnText('CardData', {type: 'climate'})}>
                            {'Влажность: '}
                            <span
                                className={`${this.cnText('CardData', {type: 'climate'})} ${this.cnText({type: "bold"})}`}>
                                    {event.data.humidity + "%"}
                                </span>

                        </p>
                    </div>
                </div>;
            } else if (event.data.albumcover) {
                innerData = <div className={`${this.cnCardData('Music')} ${this.cnMusic()}`}>
                    <div className={this.cnMusic("Header")}>
                        <div className={this.cnMusic("Albumcover")}>
                            <img className={this.cnMusic("Albumcover-Image")} src={event.data.albumcover}
                                 alt={event.data.albumcover}/>
                        </div>

                        <div className={this.cnMusic("Main")}>
                            <div className={this.cnMusic("Artist")}>
                                <p className={this.cnText('CardData', {type: 'musicTitle'})}>
                                    {event.data.artist} - {event.data.track.name}
                                </p>
                            </div>
                            <div className={this.cnMusic("Track")}>
                                <input type="range" className={this.cnMusic("Track-Range")}/>
                                <div className={`${this.cnMusic("Track-Length")} ${this.cnCardData("Track-Length")}`}>
                                    <p className={this.cnText('CardData', {type: 'music'})}>
                                        {event.data.track.length}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={this.cnMusic("Player")}>
                        <div className={this.cnMusic("Icons")}>
                            <div className={this.cnMusic("Icons-Item")}>
                                <svg className={this.cnIcon("Music")}>
                                    <use xlinkHref= {`${require(`./assets/Prev.svg`)}#Events`}></use>
                                </svg>
                            </div>
                            <div className={this.cnMusic("Icons-Item")}>
                                <svg className={`${this.cnIcon("Music")} ${this.cnIcon("Rotated")}`}>
                                    <use xlinkHref={`${require(`./assets/Prev.svg`)}#Events`}></use>
                                </svg>
                            </div>
                        </div>

                        <input type="range" className={this.cnMusic("Player-Range")}/>
                        <div className={this.cnMusic("Volume")}>
                            <p className={this.cnText('CardData',{type:'music'})}>
                                {event.data.volume}
                            </p>
                        </div>
                    </div>
                </div>;
            } else if (event.data.buttons) {
                innerData = <div className={this.cnCardData("Buttons")}>
                    <button className={this.cnCardData("Buttons-Item")}>
                            <span
                                className={`${this.cnText('CardData', {type: "paragraph"})} ${this.cnText({type: "bold"})}`}>
                                {event.data.buttons[0]}
                             </span>
                    </button>
                    <button className={this.cnCardData("Buttons-Item")}>
                            <span
                                className={`${this.cnText('CardData', {type: "paragraph"})} ${this.cnText({type: "bold"})}`}>
                                {event.data.buttons[1]}
                             </span>
                    </button>
                </div>;
            }

            cardData = <div className={`${this.cnCard('Data')} ${this.cnCardData()}`}>{innerData}</div>
        }

        const bottom = event.data || event.description ?
            <div className={this.cnCard('Bottom', {type: 'info'})}>
                {description}
                {cardData}
            </div> : <Fragment></Fragment>;
        return <div className={this.cnCard({size: event.size})} key={i}>
            <div className={`${this.cnCard('HoverIcon')} ${this.cnCard('HoverIcon-Top')}`}>
                <svg className={this.cnIcon('Card-Hover')}>
                    <use xlinkHref={`${require(`./assets/cross.svg`)}#Events`}></use>
                </svg>
            </div>
            <div className={`${this.cnCard('HoverIcon')} ${this.cnCard('HoverIcon-Bottom')}`}>
                <svg className={this.cnIcon('Card-Hover')}>
                    <use xlinkHref={`${require(`./assets/Next.svg`)}#Events`}></use>
                </svg>
            </div>

            <div className={this.cnCard('Top', {type: event.type})}>
                <div className={this.cnCard('Header')}>
                    <div className={this.cnCard('Icon')}>
                        <svg className={this.cnIcon('Card')} viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid">
                            <use xlinkHref={`${require(`./assets/${event.icon}.svg`)}#Events`}></use>
                        </svg>
                    </div>
                    <div className={this.cnCard('Title')}>
                        <h2 className={this.cnText('Card', {type: 'heading'})}>
                            {event.title}
                        </h2>
                    </div>
                </div>

                <div className={this.cnCard('Source')}>
                    <h3 className={this.cnText('Card', {type: 'sourceText'})}>
                        {event.source}
                    </h3>
                </div>
                <div className={this.cnCard('Time')}>
                    <h3 className={this.cnText('Card', {type: 'timeText'})}>
                        {event.time}
                    </h3>
                </div>
            </div>
            {bottom}

        </div>
    });

    render() {
        return (
            <Fragment>{this.events}</Fragment>

        );
    }
}

export default Events;
