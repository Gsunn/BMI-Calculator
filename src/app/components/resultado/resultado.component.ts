import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  bmi: number = 0;
  resultado: string = '';
  interpretacion: string = '';

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('valor'));
    this.bmi = +this.route.snapshot.paramMap.get('valor');
  }

  ngOnInit() { this.getResultado()}


  getResultado(){
    if(this.bmi >= 25){
      this.resultado = "Sobrepeso"
      this.interpretacion = "Tienes un peso corporal superior a lo normal. Intenta hacer más ejercicio."
    }else if( this.bmi >= 18.5 && this.bmi < 25){
      this.resultado = "Normal"
      this.interpretacion = "Tines un peso corporal correcto, buen trabajo!!"
    }else if(this.bmi <= 18.5){
      this.resultado = "Bajo"
      this.interpretacion = "Tines un peso corporal bajo. Puedes comer un poco más."
    }

    }
  
}
