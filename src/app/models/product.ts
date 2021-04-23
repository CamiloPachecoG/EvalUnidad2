export class Producto{
  
    codigo:String;
    nombre:String;
    precio:String;
    descripcion:String;
    constructor(codigo:String, nombre: String,precio:String,descripcion:String){
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
    }
  
  }