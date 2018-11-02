(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = 'function' == typeof require && require;
					if (!f && c) return c(i, !0);
					if (u) return u(i, !0);
					var a = new Error('Cannot find module \'' + i + '\'');
					throw a.code = 'MODULE_NOT_FOUND', a;
				}
				var p = n[i] = {exports: {}};
				e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];
					return o(n || r);
				}, p, p.exports, r, e, n, t);
			}
			return n[i].exports;
		}

		for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
		return o;
	}

	return r;
})()({
	1: [function (require, module, exports) {
		'use strict';
		Object.defineProperty(exports, '__esModule', {value: true});

	}, {}], 2: [function (require, module, exports) {
		arguments[4][1][0].apply(exports, arguments);
	}, {'dup': 1}], 3: [function (require, module, exports) {
		'use strict';
		Object.defineProperty(exports, '__esModule', {value: true});

		class SensorInputHandler {
			constructor(element, initialConditions, transformProperties, zoomField, brightnessField) {
				this.element = element;
				this.transformProperties = transformProperties;
				this.prevConditions = initialConditions;
				this.startProperties = JSON.parse(JSON.stringify(transformProperties));
				this.zoomField = zoomField;
				this.brightnessField = brightnessField;
				this.pointerEvents = [];
			}

			setEventHandlers() {
				if (this.zoomField && this.zoomField.parentElement) {
					this.zoomField.parentElement.addEventListener('pointerdown', (e) => {
						this._resetProperties();
					});
				}
				if (this.brightnessField && this.brightnessField.parentElement) {
					this.brightnessField.parentElement.addEventListener('pointerdown', (e) => {
						this._resetProperties();
					});
				}
				if (this.element) {
					this.element.addEventListener('pointerenter', (event) => {
						this._resetConditions();
						const currEvent = event;
						currEvent.currX = event.clientX;
						currEvent.currY = event.clientY;
						this.pointerEvents.push(currEvent);
					});
					this.element.addEventListener('pointerleave', (event) => {
						this.pointerEvents = this.pointerEvents.filter((e) => e.pointerId !== event.pointerId);
					});
					this.element.addEventListener('pointermove', (event) => {
						let currEvent = event;
						this.pointerEvents.forEach((e) => {
							if (e.pointerId === event.pointerId) {
								currEvent = e;
								return e;
							}
						});
						if (currEvent) {
							currEvent.prevX = currEvent.currX;
							currEvent.prevY = currEvent.currY;
							currEvent.currX = event.clientX;
							currEvent.currY = event.clientY;
							this._handlePointerMove(currEvent);
						}
					});
				}
			}

			_updateField(field, newCondition) {
				field.innerHTML = newCondition.toString();
			}

			_updateView() {
				this.element.style.transform = `translateX(${this.transformProperties.translateX}%) translateY(${this.transformProperties.translateY}%) scale(${this.transformProperties.scale})`;
				this.element.style.filter = `brightness(${this.transformProperties.brightness}%)`;
			}

			_updateProperty(property, value) {
				this.transformProperties[property] = +value;
				this._updateView();
			}

			_handlePointerMove(event) {
				event.preventDefault();
				if (this.pointerEvents.length === 1 && this.transformProperties.scale > 1.0) {
					this._calcChanges('translateX', event.clientX);
				}
				else if (this.pointerEvents.length === 2) {
					const event1 = this.pointerEvents[0];
					const event2 = this.pointerEvents[1];
					const currDestance = this._calcDistance(event1.currX, event1.currY, event2.currX, event2.currY);
					const prevDistance = this._calcDistance(event1.prevX, event1.prevY, event2.prevX, event2.prevY);
					this._handlePointerRotation(event1, event2);
					if (Math.abs(currDestance - prevDistance) > 1) {
						this._handleScaling(prevDistance, currDestance);
					}
					else {
						this._handlePointerRotation(event1, event2);
					}
				}
			}

			_calcDistance(x1, y1, x2, y2) {
				return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
			}

			_handleScaling(prevDistance, currDestance) {
				if (currDestance > prevDistance) {
					this._updateProperty('scale', this.transformProperties.scale + 0.05);
				}
				else if (currDestance < prevDistance && this.transformProperties.scale >= 1.05) {
					this._updateProperty('scale', this.transformProperties.scale - 0.05);
				}
				this._updateField(this.zoomField, (this.transformProperties.scale * 100).toPrecision(3));
			}

			_calcAngleFromTriangle(A, B, C) {
				return (Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B);
			}

			_handlePointerRotation(point1, point2) {
				const circleCenter = {
					x: Math.round((point1.currX + point2.currX) / 2),
					y: Math.round((point1.currY + point2.currY) / 2),
				};
				const abscissaPoint = {
					x: circleCenter.x * 2,
					y: circleCenter.y,
				};
				const point1CurrAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
					this._calcDistance(circleCenter.x, circleCenter.y, point1.currX, point1.currY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.currX, point1.currY));
				const point1PrevAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
					this._calcDistance(circleCenter.x, circleCenter.y, point1.prevX, point1.prevY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.prevX, point1.prevY));
				const point2CurrAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
					this._calcDistance(circleCenter.x, circleCenter.y, point2.currX, point2.currY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.currX, point2.currY));
				const point2PrevAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
					this._calcDistance(circleCenter.x, circleCenter.y, point2.prevX, point2.prevY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.prevX, point2.prevY));
				if (point1.currY >= point2.currY) { // 1: I, 2:  OR 1: II, 2: IV
					if (point1CurrAngle >= point1PrevAngle && point2CurrAngle <= point2PrevAngle) {
						this._updateProperty('brightness', this.transformProperties.brightness - 1);
					}
					else {
						this._updateProperty('brightness', this.transformProperties.brightness + 1);
					}
				}
				else { // 1: III, 2: I OR 1: IV, 2: II
					if (point1CurrAngle <= point1PrevAngle && point2CurrAngle >= point2PrevAngle) {
						this._updateProperty('brightness', this.transformProperties.brightness - 1);
					}
					else {
						this._updateProperty('brightness', this.transformProperties.brightness + 1);
					}
				}
				this._updateField(this.brightnessField, this.transformProperties.brightness);
			}

			_calcChanges(conditionName, eventCondition) {
				if (!this.prevConditions[conditionName]) {
					this.prevConditions[conditionName] = eventCondition.toString();
					return;
				}
				if (Math.abs(eventCondition - +this.prevConditions[conditionName]) > 5) {
					const newConditionValue = (+this.prevConditions[conditionName] < eventCondition) ?
						this.transformProperties[conditionName] + 5 : this.transformProperties[conditionName] - 5;
					this._updateProperty(conditionName, newConditionValue);
					this.prevConditions[conditionName] = eventCondition.toString();
				}
			}

			_resetProperties() {
				this._updateField(this.zoomField, 100);
				this._updateField(this.brightnessField, 100);
				for (const prop in this.transformProperties) {
					this._updateProperty(prop, this.startProperties[prop]);
				}
			}

			_resetConditions() {
				for (const prop in this.prevConditions) {
					this.prevConditions[prop] = '';
				}
			}
		}

		exports.SensorInputHandler = SensorInputHandler;

	}, {}], 4: [function (require, module, exports) {
		arguments[4][1][0].apply(exports, arguments);
	}, {'dup': 1}], 5: [function (require, module, exports) {
		'use strict';
		Object.defineProperty(exports, '__esModule', {value: true});

		class TemplateFactory {
			constructor(template, properties) {
				this._template = template ? template.content : new HTMLTemplateElement();
				this._properties = JSON.parse(JSON.stringify(properties));
				this._stringToReplace = '$meow';
				this._container = document.querySelector('#events');
			}

			_initTemplate() {
				const template = document.importNode(this._template, true);
				this._properties.forEach((prop) => {
					const element = template.querySelector(prop.selector);
					prop.element = element ? element : undefined;
				});
				return template;
			}

			_removeItem(item) {
				if (item && item.parentElement) {
					item.parentElement.removeChild(item);
				}
			}

			renderEventData(event, dataNode) {
				const graph = dataNode.querySelector('.card__data__graph');
				const image = dataNode.querySelector('.card__data__image');
				const music = dataNode.querySelector('.card__data__music');
				const climate = dataNode.querySelector('.card__data__climate');
				const buttons = dataNode.querySelector('.card__data__buttons');
				if (event.data) {
					if (event.data.type === 'graph' && graph) {
						graph.innerHTML = `  <img class="card__data__image--img" src="${'assets/RichData@2x-min.png'}" alt="${'RichData@2x-min.png'}" touch-action="none">`;
					}
					else {
						this._removeItem(graph);
					}
					if (event.data.image && image) {
						image.innerHTML = `  <img class="card__data__image--img" src="assets/${event.data.image}" alt="${event.data.image}" touch-action="none">`;
					}
					else {
						if (image) {
							this._removeItem(image.parentElement);
						}
					}
					if (event.data.temperature && climate) {
						climate.innerHTML = `
                    <div class="card__data__temperature">
                        <p class="card--data-climate">
                        Температура: <span class="card--data-climate text--bold">${event.data.temperature} С</span>
                        </p>
                    </div>
                    <div class="card__data__humidity">
                        <p class="card--data-climate">
                            Влажность: <span class="card--data-climate text--bold">${event.data.humidity}%</span>
                        </p>
                    </div>`;
					}
					else {
						this._removeItem(climate);
					}
					if (event.data.track && music) {
						music.innerHTML =
							`  <div class="music__header">
                    <div class="card__data__albumcover">
                        <img class="card__data__albumcover--img" src="${event.data.albumcover}" alt="${event.data.albumcover}">
                    </div>

                    <div class="music__main">
                        <div class="card__data__artist">
                            <p class="card--data-music-title">
                                ${event.data.artist} - ${event.data.track.name}
                            </p>
                        </div>
                        <div class="music__track">
                            <input type="range" class="music__track--range">
                            <div class="card__data__track--length music__track--length">
                                <p class="card--data-music">
                                    ${event.data.track.length}
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
                            ${event.data.volume}
                        </p>
                    </div>
                </div>`;
					}
					else {
						this._removeItem(music);
					}
					if (event.data.buttons && buttons) {
						event.data.buttons.forEach((btn) => {
							buttons.innerHTML += ` <button class="card__data__buttons--btn">
                                            <span class="card--data-paragraph text--bold">
                                                ${btn}
                                            </span>
                                        </button>`;
						});
					}
					else {
						this._removeItem(buttons);
					}
				}
			}

			renderContent(dataToRender) {
				dataToRender.forEach((event) => {
					const template = this._initTemplate();
					this._properties.forEach((prop) => {
						if (!prop.children) {
							let element;
							let inputContent;
							if (prop.neededChild) {
								element = prop.element ? prop.element.children[0] : new HTMLElement();
							}
							else {
								element = prop.element ? prop.element : new HTMLElement();
							}
							if (prop.innerHtml) {
								inputContent = prop.innerHtml.replace(this._stringToReplace, event[prop.name] !== undefined ? event[prop.name] : '');
							}
							else {
								inputContent = event[prop.name] ? event[prop.name] : '';
							}
							if (prop.className && element) {
								element.className = prop.className.replace(this._stringToReplace, event[prop.name] !== undefined ? event[prop.name] : '');
							}
							else if (prop.optional && element) {
								if (event[prop.name]) {
									element.innerHTML = inputContent;
								}
								else {
									if (prop.element) {
										this._removeItem(prop.element);
									}
								}
							}
							else {
								if (element) {
									element.innerHTML = inputContent;
								}
							}
						}
						else {
							if (event[prop.name] && prop.element) {
								this.renderEventData(event, prop.element);
							}
							else {
								if (prop.element) {
									this._removeItem(prop.element);
								}
							}
						}
					});
					if (this._container) {
						this._container.appendChild(template.cloneNode(true));
					}
				});
			}
		}

		exports.TemplateFactory = TemplateFactory;

	}, {}], 6: [function (require, module, exports) {
		'use strict';
		Object.defineProperty(exports, '__esModule', {value: true});
		const SensorInputHandler_1 = require('./SensorInputHandler');
		const element = document.querySelectorAll('.card__data__image--img')[1];
		const zoomField = document.querySelectorAll('.settings--zoom')[1];
		const brightnessField = document.querySelectorAll('.settings--brightness')[1];
		const TRANSFORM_PROPERTIES = {
			translateX: 0,
			translateY: 0,
			scale: 1.0,
			brightness: 100,
		};
		const INITIAL_CONDITIONS = {
			translateX: '',
			translateY: '',
			brightness: '',
		};
		const ImageSensorInputHandler = new SensorInputHandler_1.SensorInputHandler(element, INITIAL_CONDITIONS, TRANSFORM_PROPERTIES, zoomField, brightnessField);
		ImageSensorInputHandler.setEventHandlers();

	}, {'./SensorInputHandler': 3}], 7: [function (require, module, exports) {
		'use strict';
		Object.defineProperty(exports, '__esModule', {value: true});
		const TemplateFactory_1 = require('./TemplateFactory');
		const DATA = {
			events: [{
				type: 'info',
				title: 'Еженедельный отчет по расходам ресурсов',
				source: 'Сенсоры потребления',
				time: '19:00, Сегодня',
				description: 'Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.',
				icon: 'stats',
				data: {
					image: 'Richdata.png',
				},
				size: 'l',
			},
				{
					type: 'info',
					title: 'Дверь открыта',
					source: 'Сенсор входной двери',
					time: '18:50, Сегодня',
					description: null,
					icon: 'key',
					size: 's',
				},
				{
					type: 'info',
					title: 'Уборка закончена',
					source: 'Пылесос',
					time: '18:45, Сегодня',
					description: null,
					icon: 'robot-cleaner',
					size: 's',
				},
				{
					type: 'info',
					title: 'Новый пользователь',
					source: 'Роутер',
					time: '18:45, Сегодня',
					description: null,
					icon: 'router',
					size: 's',
				},
				{
					type: 'info',
					title: 'Изменен климатический режим',
					source: 'Сенсор микроклимата',
					time: '18:30, Сегодня',
					description: 'Установлен климатический режим «Фиджи»',
					icon: 'thermal',
					size: 'm',
					data: {
						temperature: 24,
						humidity: 80,
					},
				},
				{
					type: 'critical',
					title: 'Невозможно включить кондиционер',
					source: 'Кондиционер',
					time: '18:21, Сегодня',
					description: 'В комнате открыто окно, закройте его и повторите попытку',
					icon: 'ac',
					size: 'm',
				},
				{
					type: 'info',
					title: 'Музыка включена',
					source: 'Яндекс.Станция',
					time: '18:16, Сегодня',
					description: 'Сейчас проигрывается:',
					icon: 'music',
					size: 'm',
					data: {
						albumcover: 'https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000',
						artist: 'Florence & The Machine',
						track: {
							name: 'Big God',
							length: '4:31',
						},
						volume: 80,
					},
				},
				{
					type: 'info',
					title: 'Заканчивается молоко',
					source: 'Холодильник',
					time: '17:23, Сегодня',
					description: 'Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?',
					icon: 'fridge',
					size: 'm',
					data: {
						buttons: ['Да', 'Нет'],
					},
				},
				{
					type: 'info',
					title: 'Зарядка завершена',
					source: 'Оконный сенсор',
					time: '16:22, Сегодня',
					description: 'Ура! Устройство «Оконный сенсор» снова в строю!',
					icon: 'battery',
					size: 's',
				},
				{
					type: 'critical',
					title: 'Пылесос застрял',
					source: 'Сенсор движения',
					time: '16:17, Сегодня',
					description: 'Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.',
					icon: 'cam',
					data: {
						image: 'cleaner.jpg',
					},
					size: 'l',
				},
				{
					type: 'info',
					title: 'Вода вскипела',
					source: 'Чайник',
					time: '16:20, Сегодня',
					description: null,
					icon: 'kettle',
					size: 's',
				},
			],
		};
		const PROPERTIES = [
			{
				name: 'size',
				selector: '.card',
				neededChild: false,
				className: 'card card__$meow',
			},
			{
				name: 'type',
				selector: '.card__type--top',
				neededChild: false,
				className: 'card__type--top card__$meow',
			},
			{
				name: 'info',
				selector: '.card__type--bottom',
				neededChild: true,
			},
			{
				name: 'title',
				selector: '.card__title',
				neededChild: true,
			},
			{
				name: 'source',
				selector: '.card__source',
				neededChild: true,
			},
			{
				name: 'time',
				selector: '.card__time',
				neededChild: true,
			},
			{
				name: 'description',
				selector: '.card__description',
				neededChild: false,
				optional: true,
				innerHtml: '<p class="card--paragraph">$meow</p>',
			},
			{
				name: 'icon',
				selector: '.card__icon',
				neededChild: true,
				innerHtml: '<use xlink:href="assets/$meow.svg#Events"></use>',
			},
			{
				name: 'data',
				selector: '.card__data',
				neededChild: true,
				optional: true,
				children: [],
			},
		];
		const cardTemplate = document.querySelector('#card-template');
		const cardTemplateFactory = new TemplateFactory_1.TemplateFactory(cardTemplate, PROPERTIES);
		fetch('http://127.0.0.1:3000/api/events', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({type: 'info:critical'}),
		}).then((response) => {
			// console.log(response.json());
			return response.json();
		}).then((dataFromServer) => {
			if (dataFromServer) {
				console.log('getting data from server');
				cardTemplateFactory.renderContent(dataFromServer.events);
			}
			else {
				console.log('getting data from local source, server is offline');
				cardTemplateFactory.renderContent(DATA.events);
			}
		}).catch((e) => {
			console.log('getting data from local source, server is offline');
			cardTemplateFactory.renderContent(DATA.events);
		});

	}, {'./TemplateFactory': 5}]
}, {}, [1, 2, 3, 4, 5, 6, 7]);
