class CalcController {
    constructor() {
        this._locale = 'en-US';
        this._displayCalcE1 = document.querySelector('#display');
        this._dateE1 = document.querySelector('#date');
        this._timeE1 = document.querySelector('#time');
        this._currentDate;
        this.initiazile();
    }

    initiazile() {
        this.setDisplayDateTime();

        setInterval(() => {
           this.setDisplayDateTime();
        }, 1000);
        
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
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