import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
country!: Country;

  constructor (private activatedRoute: ActivatedRoute,
              private countriesService: CountryService,
              private router: Router){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
    switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
      )
        .subscribe( country => {
          if ( !country ) return this.router.navigateByUrl('');
          return this.country = country;
        });
  }

}
