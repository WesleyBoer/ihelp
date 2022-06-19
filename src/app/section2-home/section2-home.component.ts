import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2-home',
  templateUrl: './section2-home.component.html',
  styleUrls: ['./section2-home.component.css']
})
export class Section2HomeComponent implements OnInit {

  profissionais2: any[] = [
    {
      nome: 'Eletricista',
      img: '../../assets/img/Eletricista.jpg',
      precoMedio: 199
    },
    {
      nome: 'Encanador',
      img: '../../assets/img/Encanador.webp',
      precoMedio: 150
    },
    {
      nome: 'Pintor',
      img: '../../assets/img/Pintor.jpg',
      precoMedio: 400
    },
    {
      nome: 'Eletricista',
      img: '../../assets/img/Eletricista.jpg',
      precoMedio: 199
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
