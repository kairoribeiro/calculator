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

    getLastOperation() {
        return this._operation[this._operation.length-1];
    }

    setLastOperation(value) {
        this._operation[this._operation.length-1] = value;
    }

    isOperator(value) {
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
    }

    addOperation(value) {
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {
                this._setLastOperation(value);
            } else if(isNaN(value)) {

            } else {
                this._operation.push(value);
            }
        } else {
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
        }

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
            case 'sum':
                this.addOperation('+');
                break;
            case 'subtract':
                this.addOperation('-');
                break;
            case 'divide':
                this.addOperation('/');
                break;
            case 'multiply':
                this.addOperation('*');
                break;
            case 'percentage':
                this.addOperation('%');
                break;
            case 'equal':
                // this.();
                break;
                case 'dot':
                    this.addOperation('.');
                    break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;


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