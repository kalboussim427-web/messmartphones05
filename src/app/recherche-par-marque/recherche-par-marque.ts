import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.html',
  standalone: true,
})
export class RechercheParMarqueComponent implements OnInit {
  smartphones!: Smartphone[];
  marques: string[] = [];
  nomMarque: string = '';   

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {
    this.smartphones = this.smartphoneService.listeSmartphones();
    this.marques = [
      ...new Set(this.smartphones.map(s => s.marque?.nomMarque))
    ].filter((m): m is string => !!m);
  }

  onChange() {
    const tous = this.smartphoneService.listeSmartphones();
    this.smartphones = this.nomMarque === ''
      ? tous
      : tous.filter(s => s.marque?.nomMarque === this.nomMarque);
  }
}

