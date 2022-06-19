import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1-home',
  templateUrl: './section1-home.component.html',
  styleUrls: ['./section1-home.component.css']
})
export class Section1HomeComponent implements OnInit {
  profissionais1: any[] = [
    {
      nome: 'Eletricista',
      img: '../../assets/img/Eletricista.jpg'
    },
    {
      nome: 'Encanador',
      img: '../../assets/img/Encanador.webp'
    },
    {
      nome: 'Pintor',
      img: '../../assets/img/Pintor.jpg'
    },
    {
      nome: 'Eletricista',
      img: '../../assets/img/Eletricista.jpg'
    },
    {
      nome: 'Encanador',
      img: '../../assets/img/Encanador.webp'
    },
    {
      nome: 'Pintor',
      img: '../../assets/img/Pintor.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
