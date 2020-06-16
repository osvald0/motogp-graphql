export interface Category {
  id: string;
  name: string;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
}

export interface Team {
  id: string;
  brand: string;
  name: string;
}

export interface Rider {
  id: string;
  team: string;
  riderNumber: number;
  category: string;
  name: string;
  birthPlace: string;
  birthdate: string;
  weight: number;
  height: number;
}
