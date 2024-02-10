
export class User {
  id!: number;
  name!: string;
  username!: string;
  email!: string;
  address!: UserAddress;
  phone!: string;
  website!: string;
  company!: UserCompany;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LocationCoordinates;
}

export interface LocationCoordinates {
  lat: string;
  lng: string;
}

export interface UserCompany {
  name: string
  catchPhrase: string
  bs: string
}
