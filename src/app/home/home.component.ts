import { Component, OnInit } from '@angular/core';

import { ModalService } from '../_modal';

import { Base64 } from 'js-base64';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    bodyText: string;

    // MyText:string;
    // MyText64:string;
    MyText = "1241312312133243";
    MyText64="6464646464"

    constructor(private modalService: ModalService) { }
    stobase(){
        console.log("Start 64");
        console.log(atob("dXNlcm5hbWU6dGVtcHBhc3M=")); // username:temppass
        //this.MyText64=Base64.encode(this.MyText);
        this.MyText64=btoa(this.MyText);
    }

    basetos(){
        console.log("Start 64");
        //this.MyText=Base64.decode(this.MyText64);
        this.MyText=atob(this.MyText64);
    }


    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}