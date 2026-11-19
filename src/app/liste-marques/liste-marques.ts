import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Marque } from '../model/marque.model';
import { SmartphoneService } from '../services/smartphone';
import { UpdateMarqueComponent } from '../update-marque/update-marque';

@Component({
  selector: 'app-liste-marques',
  imports: [CommonModule, UpdateMarqueComponent],
  templateUrl: './liste-marques.html',
  standalone: true,
})
export class ListeMarquesComponent implements OnInit {
  marques!: Marque[];
  updatedMarque: Marque = { idMarque: 0, nomMarque: '' };
  ajout: boolean = true;

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {
    this.chargerMarques();
  }

  chargerMarques() {
    this.smartphoneService.listeMarquesObs().subscribe(marques => {
      this.marques = marques;
    });
  }

  marqueUpdated(m: Marque) {
    const operation = this.ajout
      ? this.smartphoneService.ajouterMarque(m)
      : this.smartphoneService.updateMarque(m);

    operation.subscribe(() => {
      this.chargerMarques();
      this.updatedMarque = { idMarque: 0, nomMarque: '' };
      this.ajout = true;
    });
  }

  updateMarque(m: Marque) {
    this.updatedMarque = { ...m };
    this.ajout = false;
  }
}