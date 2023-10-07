import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  nombre: string = '';
  cantBoletos: number = 0;
  cantCompradores: number = 0;
  boletosMax: number=0;
  cineco = '';
  total = '';
  impresion = '';
  descuento = '';
  precioBoleto: number = 12;
  
  
  procesar() {
    const cantBoletos = this.cantBoletos;
    this.boletosMax = this.cantCompradores * 7;
     if (!this.nombre) {
      this.impresion = "Por favor, ingrese su nombre";
    }else if(!this.cantCompradores){
      this.impresion = "Por favor ingresa la cantidad de compradores"
    // }else if(!this.cineco){
    //   this.impresion = "Por favor, seleccione si tiene o no tarjeta Cineco";
    }
    else if(!this.cantBoletos){
      this.impresion = "Por favor, ingrese una cantidad válida de boletos";
    }else if (this.cantBoletos > this.boletosMax) {
      this.impresion = this.cantCompradores+" persona(s) no puede comprar más de " +this.boletosMax+" boletos. Intente de nuevo";
      this.total=(0).toString();
    }else if(this.cineco === 'Si' && this.cantBoletos <= this.boletosMax && cantBoletos <= 2){
      this.total = ((this.precioBoleto * cantBoletos) *.9).toString();
      this.impresion = "La cantidad a pagar por tu(s) " +this.cantBoletos+ " boleto(s) es: $";
    }else if(this.cineco === 'Si' && this.cantBoletos <= this.boletosMax &&  cantBoletos <= 5){
      this.total = (((this.precioBoleto * cantBoletos) * 0.9) * 0.9).toString();
      this.impresion = "La cantidad a pagar por tu(s) " +this.cantBoletos+ " boleto(s) es: $";      
    }else if(this.cineco === 'Si' && this.cantBoletos <= this.boletosMax && cantBoletos >= 6){
      this.total = (((this.precioBoleto * cantBoletos) * 0.85) * 0.9).toString();
      this.impresion = "La cantidad a pagar por tu(s) " +this.cantBoletos+ " boleto(s) es: $";
    } else if(this.cantBoletos <= this.boletosMax && cantBoletos <= 2){
        this.total = (this.precioBoleto * cantBoletos).toString();
        this.impresion = "La cantidad a pagar por tu(s) " +this.cantBoletos+ " boleto(s) es: $";
    }else if(this.cantBoletos <= this.boletosMax && cantBoletos <= 5){
        this.total = ((this.precioBoleto * cantBoletos) * 0.9).toString();
        this.impresion = "La cantidad a pagar por tu(s) " +this.cantBoletos+ " boleto(s) es: $";
    }else if(this.cantBoletos <= this.boletosMax && cantBoletos >= 6){
        this.total = ((this.precioBoleto * cantBoletos) * 0.85).toString();
        this.impresion = "La cantidad a pagar por tu(s) " +this.cantBoletos+ " boleto(s) es: $";
    // }else if(cantBoletos > 7){
    //   this.impresion = "Solo puedes comprar 7 boletos por persona"
    // }
    }
    
  }


    
  
  
    salir(){
      
      this.nombre = '';
      this.cantBoletos = 0;
      this.cantCompradores = 0;
      this.cineco = '';
      this.total = '';
      this.descuento = '';
    }
  }




  
  

