import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  URL: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  getCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.URL}/name/${name}`)
    .pipe(
      catchError(error => of([]))
    );
  }

  getCountryByCapital(capital: string): Observable<any> {
    return this.http.get<Country[]>(`${this.URL}/capital/${capital}`)
    .pipe(
      catchError(error => of([]))
    );
  }

  getCountryByRegion(region: string): Observable<any> {
    return this.http.get(`${this.URL}/region/${region}`)
    .pipe(
      catchError(error => of([]))
    );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.URL }/alpha/${ code }`;
  
      return this.http.get<Country[]>( url )
        .pipe(
          map( countries => countries.length > 0 ? countries[0]: null ),
          catchError( () => of(null) ) // cuidado con la importación de map en `rxjs`
        );
    }

}
