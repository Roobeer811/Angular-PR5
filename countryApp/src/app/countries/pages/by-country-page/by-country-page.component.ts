import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  countries:Country[]=[];
  constructor(private countryService:CountryService){}

  ngOnInit(): void {
    this.searchByName("España");
  }

  onSearch(name:string){
    this.searchByName(name);
  }

  searchByName(name: string){
    this.countryService.getCountryByName(name).subscribe({
      next: (paises) =>{
      this.countries = paises;
      console.log(paises);
    },
  });
  }
}
