import {Dispatcher} from "./dispatcher";
import {Store} from "./store";

import {Component} from "./Component";
import {View} from "./view";

let components: Component[] = [
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

                    
        <div class="card card__l">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/stats.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Еженедельный отчет по расходам ресурсов</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Сенсоры потребления</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">19:00, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.</p></div>
                <div class="card__data">
                    

                    <div class="card__data__image-box">
                        <div class="card__data__image">  <img class="card__data__image--img" src="assets/Richdata.png" alt="Richdata.png" touch-action="none"></div>
                        <div class="card__data__image__settings">
                            <div class="card__data__image__settings--zoom">
                                <span class="card--image-settings">Приближение: <span class="settings--zoom">100</span>%</span>
                            </div>
                            <div class="card__data__image__settings--brightness">
                                <span class="card--image-settings">Яркость: <span class="settings--brightness">100</span>%</span>
                            </div>
                            <input type="range" class="music__track--range settings--range" min="-100" max="100" value="0">
                        </div>
                    </div>

                    


                    

                    

                </div>
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__s">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/key.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Дверь открыта</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Сенсор входной двери</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">18:50, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                
                
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__s">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/robot-cleaner.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Уборка закончена</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Пылесос</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">18:45, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                
                
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__s">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/router.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Новый пользователь</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Роутер</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">18:45, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                
                
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__m">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/thermal.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Изменен климатический режим</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Сенсор микроклимата</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">18:30, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">Установлен климатический режим «Фиджи»</p></div>
                <div class="card__data">
                    

                    

                    <div class="card__data__climate">
                    <div class="card__data__temperature">
                        <p class="card--data-climate">
                        Температура: <span class="card--data-climate text--bold">24 С</span>
                        </p>
                    </div>
                    <div class="card__data__humidity">
                        <p class="card--data-climate">
                            Влажность: <span class="card--data-climate text--bold">80%</span>
                        </p>
                    </div></div>


                    

                    

                </div>
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__m">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__critical">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/ac.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Невозможно включить кондиционер</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Кондиционер</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">18:21, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">В комнате открыто окно, закройте его и повторите попытку</p></div>
                
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__m">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/music.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Музыка включена</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Яндекс.Станция</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">18:16, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">Сейчас проигрывается:</p></div>
                <div class="card__data">
                    

                    

                    


                    

                    <div class="card__data__music">  <div class="music__header">
                    <div class="card__data__albumcover">
                        <img class="card__data__albumcover--img" src="https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000" alt="https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000">
                    </div>

                    <div class="music__main">
                        <div class="card__data__artist">
                            <p class="card--data-music-title">
                                Florence &amp; The Machine - Big God
                            </p>
                        </div>
                        <div class="music__track">
                            <input type="range" class="music__track--range">
                            <div class="card__data__track--length music__track--length">
                                <p class="card--data-music">
                                    4:31
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="music__player">
                    <div class="music__icons">
                        <div class="music__icons--item">
                            <svg class="icon--music">
                                <use xlink:href="assets/Prev.svg#Events"></use>
                            </svg>
                        </div>
                        <div class="music__icons--item">
                            <svg class="icon--music icon--rotated">
                                <use xlink:href="assets/Prev.svg#Events"></use>
                            </svg>
                        </div>
                    </div>

                    <input type="range" class="music__player--range">
                    <div class="card__data__volume">
                        <p class="card--data-music">
                            80
                        </p>
                    </div>
                </div></div>

                </div>
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__m">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/fridge.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Заканчивается молоко</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Холодильник</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">17:23, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?</p></div>
                <div class="card__data">
                    

                    

                    


                    <div class="card__data__buttons">
                     <button class="card__data__buttons--btn">
                                            <span class="card--data-paragraph text--bold">
                                                Да
                                            </span>
                                        </button> <button class="card__data__buttons--btn">
                                            <span class="card--data-paragraph text--bold">
                                                Нет
                                            </span>
                                        </button></div>

                    

                </div>
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__s">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/battery.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Зарядка завершена</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Оконный сенсор</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">16:22, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">Ура! Устройство «Оконный сенсор» снова в строю!</p></div>
                
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__l">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__critical">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/cam.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Пылесос застрял</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Сенсор движения</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">16:17, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                <div class="card__description"><p class="card--paragraph">Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.</p></div>
                <div class="card__data">
                    

                    <div class="card__data__image-box">
                        <div class="card__data__image">  <img class="card__data__image--img" src="assets/cleaner.jpg" alt="cleaner.jpg" touch-action="none"></div>
                        <div class="card__data__image__settings">
                            <div class="card__data__image__settings--zoom">
                                <span class="card--image-settings">Приближение: <span class="settings--zoom">100</span>%</span>
                            </div>
                            <div class="card__data__image__settings--brightness">
                                <span class="card--image-settings">Яркость: <span class="settings--brightness">100</span>%</span>
                            </div>
                            <input type="range" class="music__track--range settings--range" min="-100" max="100" value="0">
                        </div>
                    </div>

                    


                    

                    

                </div>
            </div> <!-- bottom -->

        </div>
    
        <div class="card card__s">
            <div class="card__hover-icon card__hover-icon--top">
                <svg class="icon--card__hover">
                    <use xlink:href="assets/cross.svg#Events"></use>
                </svg>
            </div>
            <div class="card__hover-icon  card__hover-icon--bottom">
                <svg class="icon--card__hover ">
                    <use xlink:href="assets/Next.svg#Events"></use>
                </svg>
            </div>
            <div class="card__type--top card__info">
                <div class="card__header">
                    <div class="card__icon">
                        <svg class="icon--card" viewBox="-10 -15 62 65" preserveAspectRatio="xMinYMid"><use xlink:href="assets/kettle.svg#Events"></use></svg>
                    </div>
                    <div class="card__title">
                        <h2 class="card--heading">Вода вскипела</h2>
                    </div>
                </div>

                <div class="card__source">
                    <h3 class="card--source-text">Чайник</h3>
                </div>
                <div class="card__time">
                    <h3 class="card--time-text">16:20, Сегодня</h3>
                </div>
            </div>
            <div class="card__type--bottom card__info">

                
                
            </div> <!-- bottom -->

        </div>
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
        innerHtml: `<div class="sstv-page">
                        <div class="content__header">
                            <h1 class="heading--primary">
                                Видеонаблюдение
                            </h1>
                        </div>
                        <section class="sstv">
                            <div class="sstv__row">
                                <div class="sstv__video__container">
                                    <video id="video-1" class="sstv__video" muted autoplay>
                                    </video>
                                    <a href="#popup-sstv" class="sstv__btn-expand">+</a>
                                </div>
                                <div class="sstv__video__container">
                                    <video id="video-2" class="sstv__video" muted autoplay></video>
                                    <a href="#popup-sstv" class="sstv__btn-expand">+</a>
                                </div>
                                <div class="sstv__video__container">
                                    <video id="video-3" class="sstv__video" muted autoplay></video>
                                    <a href="#popup-sstv" class="sstv__btn-expand">+</a>
                                </div>
                                <div class="sstv__video__container">
                                    <video id="video-4" class="sstv__video" muted autoplay></video>
                                    <a href="#popup-sstv" class="sstv__btn-expand">+</a>
                                </div>
            
                            </div>
            
                        </section>
                </div>`
    }

];

const view = new View(components);
const store = new Store(view);
const dispatcher = new Dispatcher(store);

//init state
