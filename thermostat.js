class Thermostat {
    constructor(settings) {
        this.elements = {
            switcher: document.querySelector(settings.switcher),
            container: document.querySelector(settings.container),
            text: document.querySelector(settings.text)
        }
        this.elements.container.onwheel = (event) => {
            this.updateView(this.degrees + event.deltaY);
        }
        this.isActive = false;
        this.elements.container.addEventListener('mousemove', this.handleClickEvent.bind(this));
        this.degrees = 0;
    }
    getAngle(vector) {
        const center = this.getCenter(this.elements.container),
            x = vector[0] - center[0],
            y = vector[1] - center[1];
        let deg = this.radToDeg(Math.atan2(x, y));
        deg += 90;
        if (deg < 0) deg += 360;
        return Math.round(deg);
    }

    handleClickEvent(event) {
        let vector = [event.x, event.y];
        let deg = thermostat.getAngle(vector);
        this.updateView(360 - deg);
    }
    updateView(result) {
        if (result > -60 && result < 300)
            this.degrees = result;
        this.elements.switcher.style = `transform: rotate(${this.degrees-60}deg);`;
        if (this.degrees !== 0) {
            this.elements.text.innerText = '+' + Math.round(this.degrees * 0.1, 1);
        } else {
            this.elements.text.innerText = '0';
        }
        return;
    }

    radToDeg(rad) {
        return rad * (180 / Math.PI);
    }

    getCenter(element) {
        var rect = element.getBoundingClientRect();
        return [
            rect.left + (rect.width / 2),
            rect.top + (rect.height / 2),
        ];
    }
}
let thermostat = new Thermostat({
    switcher: '.thermostat__switcher',
    container: '.thermostat__container',
    text: '.thermostat__text'
});