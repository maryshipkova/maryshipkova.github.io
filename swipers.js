//Slider button hide after scroll
let mainScheduleSliderBtn = document.querySelector('#schedule__slider');

function changeMainSliderVisibility(event) {
    mainScheduleSliderBtn.style = 'display:none;';
}
//DROPDOWN
let dropdownArrow = document.querySelector('.icon--arrow-down');
let dropdownToggle = document.querySelector('#filter-toggle');
dropdownToggle.addEventListener('click', () => {
    dropdownArrow.style = dropdownToggle.checked ? 'transform:rotate(180deg);' : 'transform:rotate(0deg);';
});
//Carousel
const CARD_WIDTH = 200,
    CARD_HEIGHT = 100,
    CARD_GAP = 15;
class Carousel {
    constructor(settings) {
        this.elements = {
            "container": document.querySelector(settings.container),
            "prev": document.querySelector(settings.prev),
            "next": document.querySelector(settings.next),
            "wrap": document.querySelector(settings.wrap),
            'varOfCols': settings.varOfCols
        }
        this.setOptions();
        if(this.elements.varOfCols){
            document.documentElement.style.setProperty(this.elements.varOfCols, this.options.cols + this.options.maxPosition);
        }
        this.elements.prev.addEventListener('click', ()=>this.slidePrev());
        this.elements.next.addEventListener('click', ()=>this.slideNext());
    }
    setOptions(){
        let rows=  Math.floor(this.elements.wrap.clientHeight/(CARD_HEIGHT+CARD_GAP)),
        cols= Math.floor(this.elements.wrap.clientWidth/(CARD_WIDTH+CARD_GAP));
        this.options = {
            position: 0,
            rows:rows,
            cols: cols,
            maxPosition: Math.floor(this.elements.container.children.length/(rows*cols)),
            slidersAreVisible:this.elements.container.children.length > rows*cols
        }
        if( this.options.slidersAreVisible){
            this.nextBtnOn();
        } 
        return;
    }
    nextBtnOn(){
        this.elements.next.style = 'visibility:visible;';
    }
    nextBtnOff(){
        this.elements.next.style = 'visibility:hidden;';
    }
    prevBtnOn(){
        this.elements.prev.style = 'visibility:visible;';
        
    }
    prevBtnOff(){
        this.elements.prev.style = 'visibility:hidden;';
    }

    slideNext() {
        ++this.options.position;
        this.prevBtnOn();
            if(this.options.position < this.options.maxPosition) {
                this.prevBtnOn();
            }else{
                this.options.position = this.options.maxPosition;
                this.nextBtnOff();
            }
            console.log(this.options.position, this.options.maxPosition);
            this.elements.container.style = `transform:translateX(${-this.options.position*(CARD_WIDTH+CARD_GAP)}px)`;
        console.log(this.elements.container, this.options.maxPosition,this.options.cols);
    }

    slidePrev() {
            --this.options.position;
            this.nextBtnOn();
            if(this.options.position > 0){
                this.nextBtnOn();
            }else{
                this.options.position = 0;
                this.prevBtnOff();
            }
            console.log(this.options.position, this.options.maxPosition);
            this.elements.container.style = `transform:translateX(${-this.options.position*(CARD_WIDTH+CARD_GAP)}px)`;
        
    }
}

let devicesCarousel = new Carousel({
    "container": ".carousel__container--devices",
    "prev": ".carousel__prev--devices",
    "next": ".carousel__next--devices",
    "wrap": ".carousel__wrap--devices"
});

let scenariosCarousel = new Carousel({
    "container": ".carousel__container--scenarios",
    "prev": ".carousel__prev--scenarios",
    "next": ".carousel__next--scenarios",
    "wrap": ".carousel__wrap--scenarios",
    "varOfCols" : "--scenarios-cols"
});