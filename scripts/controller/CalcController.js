class CalcController {
    constructor() {
        this._operation = [];
        this._locale = 'en-US';
        this._displayCalcE1 = document.querySelector('#display');
        this._dateE1 = document.querySelector('#date');
        this._timeE1 = document.querySelector('#time');
        this._currentDate;
        this.initiazile();
        this.initButtonsEvents();
    }

    initiazile() {
        this.setDisplayDateTime();

        setInterval(() => {
        this.setDisplayDateTime();
        }, 1000);
        
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addOperation(value) {
        this._operation.push(value);
    }

    setError() {
        this.displayCalc = 'Error'
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            // case 'sum':
            //     this.();
            //     break;
            // case 'subtract':
            //     this.();
            //     break;
            // case 'divide':
            //     this.();
            //     break;
            // case 'multiply':
            //     this.();
            //     break;
            // case 'percentage':
            //     this.();
            //     break;
            // case 'equal':
            //     this.();
            //     break;
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons =  document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                console.log(btn.className.baseVal.replace('btn-', ''));
            })

            this.addEventListenerAll(btn, 'mouseover mauseup mousedown', e => {
                btn.style.cursor = 'pointer';
            })
        
        })

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeE1.innerHTML;
    }

    set displayTime(value) {
        return this._timeE1.innerHTML = value;
    }

    get displayDate() {
        return this._dateE1.innerHTML;
    }

    set displayDate(value) {
        return this._dateE1.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcE1.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcE1.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}