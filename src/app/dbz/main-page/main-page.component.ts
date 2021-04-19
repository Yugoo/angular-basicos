import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  nuevo:Personaje={
    nombre:'',
    poder:0,
  }

  personajes:Personaje[]=[
    {
    nombre:'Goku',
    poder:15000
  },
  {
    nombre:'Vegueta',
    poder:7500
  }]
  

  agregarNuevoPersonaje(argumento:Personaje){
    
    //console.log(argumento);
    this.personajes.push(argumento);

  }
  constructor(private DbzService:DbzService){

  }

  // cambiarNombre(event:any){
  //   console.log(event)
  // }
}
