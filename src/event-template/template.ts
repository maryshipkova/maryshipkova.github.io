import {IEventModel} from "./IEventModel";
import {IProperty} from "./IProperty";
import {TemplateFactory} from "./TemplateFactory";

const DATA: { events: IEventModel[] } = {
    events: [{
        type: "info",
        title: "Еженедельный отчет по расходам ресурсов",
        source: "Сенсоры потребления",
        time: "19:00, Сегодня",
        description: "Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",
        icon: "stats",
        data: {
            image: "Richdata.png",
        },
        size: "l",
    },
        {
            type: "info",
            title: "Дверь открыта",
            source: "Сенсор входной двери",
            time: "18:50, Сегодня",
            description: null,
            icon: "key",
            size: "s",
        },
        {
            type: "info",
            title: "Уборка закончена",
            source: "Пылесос",
            time: "18:45, Сегодня",
            description: null,
            icon: "robot-cleaner",
            size: "s",
        },
        {
            type: "info",
            title: "Новый пользователь",
            source: "Роутер",
            time: "18:45, Сегодня",
            description: null,
            icon: "router",
            size: "s",
        },
        {
            type: "info",
            title: "Изменен климатический режим",
            source: "Сенсор микроклимата",
            time: "18:30, Сегодня",
            description: "Установлен климатический режим «Фиджи»",
            icon: "thermal",
            size: "m",
            data: {
                temperature: 24,
                humidity: 80,
            },
        },
        {
            type: "critical",
            title: "Невозможно включить кондиционер",
            source: "Кондиционер",
            time: "18:21, Сегодня",
            description: "В комнате открыто окно, закройте его и повторите попытку",
            icon: "ac",
            size: "m",
        },
        {
            type: "info",
            title: "Музыка включена",
            source: "Яндекс.Станция",
            time: "18:16, Сегодня",
            description: "Сейчас проигрывается:",
            icon: "music",
            size: "m",
            data: {
                albumcover: "https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000",
                artist: "Florence & The Machine",
                track: {
                    name: "Big God",
                    length: "4:31",
                },
                volume: 80,
            },
        },
        {
            type: "info",
            title: "Заканчивается молоко",
            source: "Холодильник",
            time: "17:23, Сегодня",
            description: "Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",
            icon: "fridge",
            size: "m",
            data: {
                buttons: ["Да", "Нет"],
            },
        },
        {
            type: "info",
            title: "Зарядка завершена",
            source: "Оконный сенсор",
            time: "16:22, Сегодня",
            description: "Ура! Устройство «Оконный сенсор» снова в строю!",
            icon: "battery",
            size: "s",
        },
        {
            type: "critical",
            title: "Пылесос застрял",
            source: "Сенсор движения",
            time: "16:17, Сегодня",
            description: "Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",
            icon: "cam",
            data: {
                image: "cleaner.jpg",
            },
            size: "l",
        },
        {
            type: "info",
            title: "Вода вскипела",
            source: "Чайник",
            time: "16:20, Сегодня",
            description: null,
            icon: "kettle",
            size: "s",
        },
    ],
};

const PROPERTIES: IProperty[] = [
    {
        name: "size",
        selector: ".card",
        neededChild: false,
        className: "card card__$meow",
    },
    {
        name: "type",
        selector: ".card__type--top",
        neededChild: false,
        className: "card__type--top card__$meow",
    },
    {
        name: "info",
        selector: ".card__type--bottom",
        neededChild: true,
    },
    {
        name: "title",
        selector: ".card__title",
        neededChild: true,
    },
    {
        name: "source",
        selector: ".card__source",
        neededChild: true,
    },
    {
        name: "time",
        selector: ".card__time",
        neededChild: true,
    },
    {
        name: "description",
        selector: ".card__description",
        neededChild: false,
        optional: true,
        innerHtml: '<p class="card--paragraph">$meow</p>',
    },
    {
        name: "icon",
        selector: ".card__icon",
        neededChild: true,
        innerHtml: '<use xlink:href="assets/$meow.svg#Events"></use>',
    },
    {
        name: "data",
        selector: ".card__data",
        neededChild: true,
        optional: true,
        children: [],
    },
];

const cardTemplate: HTMLTemplateElement | null = document.querySelector("#card-template");
if (cardTemplate) {
    const cardTemplateFactory = new TemplateFactory(cardTemplate, PROPERTIES);
    cardTemplateFactory.renderContent(DATA.events);
}

// fetch("http://127.0.0.1:3000/api/events", {
//     method: "POST",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({type: "info:critical"}),
//
// }).then((response) => {
//     // console.log(response.json());
//     return response.json();
// }).then((dataFromServer) => {
//     if (dataFromServer) {
//         console.log("getting data from server");
//         cardTemplateFactory.renderContent(dataFromServer.events);
//
//     } else {
//         console.log("getting data from local source, server is offline");
//         cardTemplateFactory.renderContent(DATA.events);
//     }
//
// }).catch((e) => {
//     console.log("getting data from local source, server is offline");
//     cardTemplateFactory.renderContent(DATA.events);
// });
