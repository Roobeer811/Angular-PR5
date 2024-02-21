import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{
  countries:Country[]=[];
  constructor(private countryService:CountryService){}

  ngOnInit(): void {
    this.searchByRegion("europe");
  }

  onSearch(region:string){
    this.searchByRegion(region);
  }

  searchByRegion(region: string){
    this.countryService.getCountryByRegion(region).subscribe({
      next: (paises) =>{
      this.countries = paises;
      console.log(paises);
    },
  });
  }
}
