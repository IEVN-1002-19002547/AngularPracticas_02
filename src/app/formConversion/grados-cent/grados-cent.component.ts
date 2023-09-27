import { Component } from '@angular/core';

@Component({
  selector: 'app-grados-cent',
  templateUrl: './grados-cent.component.html',
  styleUrls: ['./grados-cent.component.css']
})
export class GradosCentComponent {
  CelsiusFarenheit='';
  CelsiusKelvin='';
  FarenheitCelsius='';
  FarenheitKelvin='';
  KelvinCelsius='';
  KelvinFarenheit='';
  temperatura='';
  conversion:number=0;
  resultado: string=''; // Declara resultado como number o string
  //sumakelvin:number=273.15;

    convertir() {
       const temperatura = parseInt(this.temperatura);
        if (isNaN(temperatura)) {
            this.resultado = 'Por favor, ingrese números válidos'; //Validacion de numeros
        } else {
            if (this.CelsiusFarenheit === 'cel-far') {
                this.conversion = ((temperatura * 1.8)+ 32);
                this.resultado = 'La temperatura de ' +this.temperatura+ ' °C es equivalente a ' +this.conversion+ ' °F';
            } else if (this.CelsiusKelvin === 'cel-kel') {
                this.conversion = (parseInt(this.temperatura) + 273.15);//Checar Resultado 328.15
                //console.log(typeof this.temperatura);
                this.resultado = 'La temperatura de ' +this.temperatura+ ' °C es equivalente a ' +this.conversion+ ' °K';
            } else if (this.FarenheitCelsius === 'far-cel') {
                this.conversion = ((temperatura - 32) / 1.8);
                this.resultado = 'La temperatura de ' +this.temperatura+ ' °F es equivalente a ' +this.conversion+ ' °C';
            } else if (this.FarenheitKelvin === 'far-kel') {
                this.conversion = ((5/9 * (temperatura - 32)) + 273.15); 
                this.resultado = 'La temperatura de ' +this.temperatura+ ' °F es equivalente a ' +this.conversion+ ' °K';
            } else if (this.KelvinCelsius === 'kel-cel') {
                this.conversion = (temperatura - 273.15);
                this.resultado = 'La temperatura de ' +this.temperatura+ ' °K es equivalente a ' +this.conversion+ ' °C';
            } else if (this.KelvinFarenheit === 'kel-far') {
                this.conversion = ((1.8 * (temperatura - 273.15)) + 32);
                this.resultado = 'La temperatura de ' +this.temperatura+ ' °K es equivalente a ' +this.conversion+ ' °F';
            } 
        }
    }
}
