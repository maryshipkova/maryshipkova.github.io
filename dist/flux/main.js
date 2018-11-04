"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components = [
    {
        name: "События",
        id: "page-events",
        innerHtml: "  <div class=\"events-page\">\n                        <div class=\"content__header\">\n                            <h1 class=\"heading--primary\">\n                                \u041B\u0435\u043D\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439\n                            </h1>\n                        </div>\n                        <section class=\"events\" id=\"events\">\n        \n                        </section>\n                    </div>"
    },
    {
        name: "Сводка",
        id: "page-summary",
        innerHtml: "<div class=\"summary-page\">\n                        <section class=\"main\">\n                                <div class=\"section-heading\">\n                                    <h3 class=\"heading-section\">\u0413\u043B\u0430\u0432\u043D\u043E\u0435</h3>\n                                </div>\n                                <div class=\"main__content\">\n                                    <div class=\"main__status\">\n                                        <div class=\"main__status--greeting\">\n                                            <h2 class=\"heading-greeting\">\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!</h2>\n                                        </div>\n                                        <div class=\"main__status--house\">\n                                            <p class=\"paragraph-1\">\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430.</p>\n                                        </div>\n                                        <div class=\"main__status--temperature\">\n                \n                                            <div class=\"temperature--heading\">\n                                                <h4 class=\"heading--place\">\u0414\u043E\u043C\u0430</h4>\n                                            </div>\n                                            <div class=\"temperature--heading\">\n                                                <h4 class=\"heading--place\">\u0417\u0430 \u043E\u043A\u043D\u043E\u043C</h4>\n                                            </div>\n                \n                                            <div class=\"temperature--value\">\n                                                <h1 class=\"heading-temperature\">+23</h1>\n                                            </div>\n                                            <div class=\"temperature--value\">\n                                                <h1 class=\"heading-temperature\">+19\n                                                    <svg class=\"icon--cloud\">\n                                                        <use xlink:href=\"assets/cloud-drizzle.svg#Final\"></use>\n                                                    </svg>\n                                                </h1>\n                                            </div>\n                \n                                        </div>\n                                    </div>\n                                    <div class=\"main__schedule\" onscroll=\"changeMainSliderVisibility(event)\">\n                                        <a href=\"#popup-temperature\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Philips Cooler</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Yeelight LED Smart Bulb</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-floor\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Warm Floor</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <div class=\"main__schedule__slider\" id=\"schedule__slider\">\n                                            <img srcset=\"assets/Icons/Arrow_Double/M.png 1x, assets/Icons/Arrow_Double/M@2x.png 2x\" src=\"assets/Icons/Arrow_Double/M@2x.png\"\n                                                alt=\"slider\" class=\"icon--double-arrow\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                            <!-- /main -->\n                            <!-- scenarios -->\n                            <section class=\"scenarios\">\n                                <div class=\"scenarios__heading\">\n                                    <div class=\"section-heading\">\n                                        <h3 class=\"heading-section\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</h3>\n                                    </div>\n                                    <div class=\"scenarios__icons\">\n                                        <div class=\"nav-arrows\">\n                                            <div class=\"arrow arrow--left carousel__prev carousel__prev--scenarios\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"arrow arrow--right carousel__next carousel__next--scenarios\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- scenarios__heading -->\n                                <div class=\"carousel__wrap carousel__wrap--scenarios\">\n                                    <div class=\"scenarios__content carousel__container carousel__container--scenarios\">\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card  card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_scheduled.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u042F \u0443\u0445\u043E\u0436\u0443</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00</p>\n                                            </div>\n                                        </div>\n                                        <a href=\"#popup-floor\" class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435</h5>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                                <!-- scenarios__content -->\n                            </section>\n                            <!-- /scenarios -->\n                \n                            <!-- devices -->\n                            <section class=\"devices\">\n                                <div class=\"devices__header\">\n                                    <div class=\"section-heading\">\n                                        <h3 class=\"heading-section\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</h3>\n                                    </div>\n                                    <div class=\"devices__filters\">\n                                        <div class=\" devices__filter filter-active\">\n                                            <label for=\"filter-toggle\">\n                                                <h5 class=\"heading--filter\">\u0412\u0441\u0435\n                                                    <svg class=\"icon--arrow-down\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                        enable-background=\"new 0 0 129 129\">\n                                                        <g>\n                                                            <path d=\"m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z\" />\n                                                        </g>\n                                                    </svg>\n                                                </h5>\n                                            </label>\n                                        </div>\n                                        <input type=\"checkbox\" class=\"devices__filters__checkbox\" id=\"filter-toggle\">\n                                        <div class=\"devices__filters__list\">\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041A\u0443\u0445\u043D\u044F</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u0417\u0430\u043B</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041A\u0430\u043C\u0435\u0440\u044B</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"devices__icons\">\n                                        <div class=\"nav-arrows\">\n                                            <div class=\"arrow arrow--left carousel__prev carousel__prev--devices\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"arrow arrow--right carousel__next carousel__next--devices\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"carousel__wrap carousel__wrap--devices\">\n                                    <div class=\"devices__list carousel__container carousel__container--devices\">\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Yeelight LED Smart Bulb</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">D-Link Omna 180 Cam</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-temperature\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Elgato Eve Degree Connected</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0434\u043E 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">LIFX Mini Day & Dusk A60 E27</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Mi Air Purifier 2S</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Philips Zhirui</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Mi Air Purifier 2S</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                            </section>\n                            <!-- /devices -->\n                    </div>"
    },
    {
        name: "Видеонаблюдение",
        id: "page-sstv",
        innerHtml: "<div class=\"sstv-page\">\n                        <div class=\"content__header\">\n                            <h1 class=\"heading--primary\">\n                                \u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\n                            </h1>\n                        </div>\n                        <section class=\"sstv\">\n                            <div class=\"sstv__row\">\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-1\" class=\"sstv__video\" muted autoplay>\n                                    </video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-2\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-3\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-4\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n            \n                            </div>\n            \n                        </section>\n                </div>"
    }
];
exports.components = components;
