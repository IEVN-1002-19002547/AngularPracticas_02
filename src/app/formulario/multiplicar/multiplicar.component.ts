import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent {
  numero1:number=0;
  numero2:number=0;
  resultado:string|number='';
  multiplicacion:number=0;
  multiplicar(){
    this.resultado = '';
    for (let i = 0; i < this.numero2; i++) {
      this.resultado += `${this.numero1} + `;
    }
    // Eliminar el último '+ ' de la cadena
    this.resultado = this.resultado.slice(0, -2);
    this.multiplicacion = this.numero1 * this.numero2;
  }
}
