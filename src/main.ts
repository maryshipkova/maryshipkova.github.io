// import {Store} from "./store";
import {Component} from "./Component";
// import {View} from "./view";
// import {Dispatcher} from "./dispatcher";

const components: Component[] = [
    {
        name: "События",
        id: "page-events",
        innerHtml: `  <div class="events-page">
                        <div class="content__header">
                            <h1 class="heading--primary">
                                Лента событий
                            </h1>
                        </div>
                        <section class="events" id="events">
        
                        </section>
                    </div>`
    },
    {
        name: "Сводка",
        id: "page-summary",
        innerHtml: `<div class="summary-page">
                        <section class="main">
                                <div class="section-heading">
                                    <h3 class="heading-section">Главное</h3>
                                </div>
                                <div class="main__content">
                                    <div class="main__status">
                                        <div class="main__status--greeting">
                                            <h2 class="heading-greeting">Привет, Геннадий!</h2>
                                        </div>
                                        <div class="main__status--house">
                                            <p class="paragraph-1">Двери и окна закрыты, сигнализация включена.</p>
                                        </div>
                                        <div class="main__status--temperature">
                
                                            <div class="temperature--heading">
                                                <h4 class="heading--place">Дома</h4>
                                            </div>
                                            <div class="temperature--heading">
                                                <h4 class="heading--place">За окном</h4>
                                            </div>
                
                                            <div class="temperature--value">
                                                <h1 class="heading-temperature">+23</h1>
                                            </div>
                                            <div class="temperature--value">
                                                <h1 class="heading-temperature">+19
                                                    <svg class="icon--cloud">
                                                        <use xlink:href="assets/cloud-drizzle.svg#Final"></use>
                                                    </svg>
                                                </h1>
                                            </div>
                
                                        </div>
                                    </div>
                                    <div class="main__schedule" onscroll="changeMainSliderVisibility(event)">
                                        <a href="#popup-temperature" class="card card__f card--main">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_temperature.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Philips Cooler</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Начнет охлаждать в 16:30</p>
                                            </div>
                                        </a>
                                        <a href="#popup-light" class="card card__f card--main">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Xiaomi Yeelight LED Smart Bulb</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включится в 17:00</p>
                                            </div>
                                        </a>
                                        <a href="#popup-floor" class="card card__f card--main">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_temperature_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Xiaomi Warm Floor</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включено</p>
                                            </div>
                                        </a>
                                        <div class="main__schedule__slider" id="schedule__slider">
                                            <img srcset="assets/Icons/Arrow_Double/M.png 1x, assets/Icons/Arrow_Double/M@2x.png 2x" src="assets/Icons/Arrow_Double/M@2x.png"
                                                alt="slider" class="icon--double-arrow">
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- /main -->
                            <!-- scenarios -->
                            <section class="scenarios">
                                <div class="scenarios__heading">
                                    <div class="section-heading">
                                        <h3 class="heading-section">Избранные сценарии</h3>
                                    </div>
                                    <div class="scenarios__icons">
                                        <div class="nav-arrows">
                                            <div class="arrow arrow--left carousel__prev carousel__prev--scenarios">
                                                <svg class="icon--arrow">
                                                    <use xlink:href="assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m"></use>
                                                </svg>
                                            </div>
                                            <div class="arrow arrow--right carousel__next carousel__next--scenarios">
                                                <svg class="icon--arrow">
                                                    <use xlink:href="assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- scenarios__heading -->
                                <div class="carousel__wrap carousel__wrap--scenarios">
                                    <div class="scenarios__content carousel__container carousel__container--scenarios">
                                        <div class="card card__f card--scenarios">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Выключить весь свет в доме и во дворе</h5>
                                            </div>
                                        </div>
                                        <div class="card  card__f card--scenarios">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_scheduled.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Я ухожу</h5>
                                            </div>
                                        </div>
                                        <div class="card card__f card--scenarios">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Включить свет в коридоре</h5>
                                            </div>
                                        </div>
                                        <div class="card card__f card--scenarios">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_temperature_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Набрать горячую ванну</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Начнётся в 18:00</p>
                                            </div>
                                        </div>
                                        <a href="#popup-floor" class="card card__f card--scenarios">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_temperature_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Сделать пол тёплым во всей квартире</h5>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <!-- scenarios__content -->
                            </section>
                            <!-- /scenarios -->
                
                            <!-- devices -->
                            <section class="devices">
                                <div class="devices__header">
                                    <div class="section-heading">
                                        <h3 class="heading-section">Избранные устройства</h3>
                                    </div>
                                    <div class="devices__filters">
                                        <div class=" devices__filter filter-active">
                                            <label for="filter-toggle">
                                                <h5 class="heading--filter">Все
                                                    <svg class="icon--arrow-down" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        enable-background="new 0 0 129 129">
                                                        <g>
                                                            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                                                        </g>
                                                    </svg>
                                                </h5>
                                            </label>
                                        </div>
                                        <input type="checkbox" class="devices__filters__checkbox" id="filter-toggle">
                                        <div class="devices__filters__list">
                                            <div class="devices__filter">
                                                <h5 class="heading--filter">Кухня</h5>
                                            </div>
                                            <div class="devices__filter">
                                                <h5 class="heading--filter">Зал</h5>
                                            </div>
                                            <div class="devices__filter">
                                                <h5 class="heading--filter">Лампочки</h5>
                                            </div>
                                            <div class="devices__filter">
                                                <h5 class="heading--filter">Камеры</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="devices__icons">
                                        <div class="nav-arrows">
                                            <div class="arrow arrow--left carousel__prev carousel__prev--devices">
                                                <svg class="icon--arrow">
                                                    <use xlink:href="assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m"></use>
                                                </svg>
                                            </div>
                                            <div class="arrow arrow--right carousel__next carousel__next--devices">
                                                <svg class="icon--arrow">
                                                    <use xlink:href="assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel__wrap carousel__wrap--devices">
                                    <div class="devices__list carousel__container carousel__container--devices">
                                        <a href="#popup-light" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Xiaomi Yeelight LED Smart Bulb</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включено</p>
                                            </div>
                                        </a>
                                        <a href="#popup-light" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">D-Link Omna 180 Cam</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включится в 17:00</p>
                                            </div>
                                        </a>
                                        <a href="#popup-temperature" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_temperature.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Elgato Eve Degree Connected</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Выключено до 17:00</p>
                                            </div>
                                        </a>
                                        <a href="#popup-light" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">LIFX Mini Day & Dusk A60 E27</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включится в 17:00</p>
                                            </div>
                                        </a>
                                        <a href="#popup-light" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Xiaomi Mi Air Purifier 2S</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включено</p>
                                            </div>
                                        </a>
                                        <a href="#popup-light" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Philips Zhirui</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Выключено</p>
                                            </div>
                                        </a>
                                        <a href="#popup-light" class="card card__f card--devices">
                                            <div class="card__icon">
                                                <svg class="icon--device">
                                                    <use xlink:href="assets/icon_sun_2.svg#Final"></use>
                                                </svg>
                                            </div>
                                            <div class="card__title">
                                                <h5 class="heading-card">Xiaomi Mi Air Purifier 2S</h5>
                                            </div>
                                            <div class="card__text">
                                                <p class="paragraph-2">Включено</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                            <!-- /devices -->
                    </div>`
    },
    {
        name: "Видеонаблюдение",
        id: "page-sstv",
        innerHtml: ``
    }

];

// const store = Store.Instance;
// const view = new View(components);
// const dispatcher = new Dispatcher();
// dispatcher.setEventHandlers(Array.from(view.navContainer.children));

export {components};
