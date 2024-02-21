import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{
  countries:Country [] = [];

  onSearch(data: string) {
    this.searchCapital(data);
  }

  constructor(private countryService:CountryService){}

  ngOnInit(): void {
    this.searchCapital("madrid");
  }

  searchCapital(capital: string){
    this.countryService.getCountryByCapital(capital).subscribe({
      next: (paises) =>{
      this.countries = paises;
      console.log(paises);
    },
  });
  }
}
