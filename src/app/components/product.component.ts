import { Component } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    ipAdd : string;
    area : string;
    countries : string;
    postal : string;
    zone : string;
    isp : string;
    lat : string;
    lng : string;
    
    ngOnInit() : void{
        this.getData('8.8.8.8');
    }

    getData = async ( prueba) => {
        const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_GGeLmcJUbTUvhKSpNYBSPrxVC1B4k&ipAddress=${prueba}`);
        const users = await data.json();       
        console.log(users);
        this.ipAdd = users.ip;
        this.area = users.location.region;
        this.countries = users.location.country;
        this.postal = users.location.postalCode;
        this.zone = users.location.timezone;
        this.isp = users.isp;
        this.lat = users.location.lat;
        this.lng = users.location.lng;
    }
        zoom = 9; 
}