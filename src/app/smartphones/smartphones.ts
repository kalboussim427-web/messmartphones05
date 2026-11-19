import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-smartphones',
  templateUrl: './smartphones.html',
  standalone: true,
})
export class SmartphonesComponent implements OnInit {
  smartphones!: Smartphone[];

  constructor(
    private smartphoneService: SmartphoneService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerSmartphones();
  }

  chargerSmartphones() {
    this.smartphones = this.smartphoneService.listeSmartphones();
  }

  supprimerSmartphone(smartphone: Smartphone) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.smartphoneService.supprimerSmartphone(smartphone);
      console.log("smartphone supprimé");
      this.chargerSmartphones();
    }
  }
}


