# 1.Адаптивная вёрстка
Адаптивность вёрстки под разные устроена обеспечена с помощью:
- CSS-grid
- Медиа-запросов
- img srcset

Также все карточки с устройствами грузятся с помощью шаблонизатора (template.js), он сильно нуждается в рефакторинге, но справляется с основной задачей - динамическая загрузка контента

Появление раздела с яркостью и приближением на карточке с графиком, не баг а фича: такой раздел есть у каждого изображения, в данном случае я подменила json, чтобы грузился не график, а рисунок графика.

PS: на github pages не загружается картинка RichData.png, вероятно, баг самого гитхаба

# 2.Сенсорный ввод
sensor-input.js
Задание выполнено на карточке с робопылесосом из 1 задания с помощью стандарта touch event
Клик на значения яркости и зума возвращает карточку к исходному виду
По заданию смещение картинки также должно вызывать смещение ползунка, но это у меня не получилось сделать.
