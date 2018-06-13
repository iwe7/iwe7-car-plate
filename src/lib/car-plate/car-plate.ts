import { OpenKeyboardProvinceDirective, OpenKeyboardStringDirective } from 'iwe7-keyboard';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'car-plate',
    templateUrl: 'car-plate.html',
    styleUrls: ['./car-plate.scss']
})

export class CarPlateComponent implements OnInit {
    key0: string;
    key1: string;
    list: string[] = [];

    @ViewChild('province', { read: OpenKeyboardProvinceDirective }) province: OpenKeyboardProvinceDirective;
    @ViewChild('provinceArea', { read: OpenKeyboardStringDirective }) provinceArea: OpenKeyboardStringDirective;
    @ViewChild('code', { read: OpenKeyboardStringDirective }) code: OpenKeyboardStringDirective;

    constructor() { }

    ngOnInit() { }

    openKeyboardProvince(e: any) {
        this.key0 = e;
        this.provinceArea.open();
    }

    openKeyboardStringArea(e: any) {
        this.key1 = e;
        this.provinceArea.hide();
        this.code.open();
    }

    openKeyboardString(e: any) {
        if (e === 'delete') {
            this.list.pop();
        } else {
            if (this.list.length <= 4) {
                this.list.push(e);
            }
            if (this.list.length >= 5) {
                this.code.hide();
                return;
            }
        }
    }
}
