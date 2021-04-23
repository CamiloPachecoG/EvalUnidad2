import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Producto } from '../../models/product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  lista!: Producto[];
  aux!:String[];
  mensaje!:string;
  resp!:boolean;

  ngOnInit(): void {
    this.lista =[];
    this.aux=[];

  }


  formulario = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl('')

  });


  //ELIMINAR PRODUCTO
  eliminar(id: number){
      this.lista = this.lista.filter((v, i) => i !== id);
    }

  

  //VALIDACIONES
  valid(){
    for(let campo in this.formulario.controls){
      let aux = this.formulario.controls[campo].value;
      if (aux.length>2 && aux.length <51){
        this.mensaje = "Campos Validados";
      }else{
        this.mensaje = "Campos Invalidos";
      }
    }
  }

  //AGREGAR PRODUCTO
  addProduct(){
    for(let campo in this.formulario.controls){  
      let aux = this.formulario.controls[campo].value;
      this.aux.push(aux);
    }
    this.lista.push(new Producto(this.aux[0],this.aux[1],this.aux[2],this.aux[3]));
    this.formulario.reset();
  }
  

}

