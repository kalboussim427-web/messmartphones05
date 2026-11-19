import { Pipe, PipeTransform } from '@angular/core';
import { Smartphone } from './model/smartphones.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(smartphones: Smartphone[], searchTerm: string): Smartphone[] {
    if (!searchTerm) {
      return smartphones;
    }
    searchTerm = searchTerm.toLowerCase();
    return smartphones.filter((smartphone) =>
      smartphone.nomSmartphone.toLowerCase().includes(searchTerm)
    );
  }
  }

