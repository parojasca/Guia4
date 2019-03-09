import { Component } from '@angular/core';
import { CompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
titulo='Listado ciudades';
ciudades=[
  {
    pais : "Colombia",
    ciudad : "Bogotá",
    habit: "25005"
  },

  {
    pais : "Brasil",
    ciudad : "Brasilia",
    habit: "456322"
  },
  {
    pais : "Chile",
    ciudad : "Santiago de chile",
    habit: "256322"
  },
  {
    pais : "Peru",
    ciudad : "Lima",
    habit: "52104"
  },
  {
    pais : "Venezuela",
    ciudad : "Caracas",
    habit: 548866
  },
]

constructor(){
  
}
  
}

