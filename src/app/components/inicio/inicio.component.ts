import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25
  peso = 60
  altura = 170
  sexo = false // 0->Femenino  1->Masculino


  constructor(private router: Router) { }

  ngOnInit() {
  }

  cambiarAltura(event: any){
    this.altura = event.target.value
  }

  calcularBMI(){

    const bmi = this.peso / Math.pow(this.altura/100, 2)
    // console.log('BMI -> ', bmi.toFixed(1))
    this.router.navigate(['/resultado', bmi.toFixed(1)])

  }

  setSexo(value:boolean){
    this.sexo = value
  }

}