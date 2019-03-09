import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { TrustedScriptString } from '@angular/core/src/sanitization/bypass';
import { NgModel, FormsModule } from '@angular/forms';
import { formatNumber } from '@angular/common';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
 ciudad:string;
  sitio:string;

  items= [];

  onAgregarSitio(){
    
    this.items.push({
     ciudad:this.ciudad,
      sitio:this.sitio,
      image:this.myFunction()
    });
    console.log(this.items)
    
  }
  

   myFunction() {
   
    return Math.floor((Math.random() * 10) + 1);
  }

  constructor() {
    
   
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
