export interface Country {
    name: Name;
    capital: string;
    languages: string;
    region: string;
    population: number;
    flags: Flags;
    translations: Translations;
    ccn3: string;
  }

  export interface Translations{
    por:{
      common: string;
    };
    spa:{
      common: string;
    };
    fra:{
      common: string;
    };
    jpn:{
      common: string;
    };
    ita:{
      common: string;
    };
    pol:{
      common: string;
    };
    tur:{
      common: string;
    };
    ara:{
      common: string;
    };
    deu:{
      common: string;
    };
    rus:{
      common: string;
    };
  }

  export interface Name{
    common:string
  }

  export interface Flags{
    png:string
    svg: string
  }