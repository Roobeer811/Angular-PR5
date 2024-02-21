export interface Country {
    name: string;
    capital: string;
    languages: string;
    region: string;
    population: number;
    flag: string;
    translations: Translations;
    ccn3: string;
  }

  export interface Translations{
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
  }