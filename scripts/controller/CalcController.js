class CalcController {
    constructor() {
        this._displayCalc = '0';
        this._todayDate;
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get todayDate() {
        return this._todayDate;
    }

    set todayDate(value) {
        this._todayDate = value;
    }
}