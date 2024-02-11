
export class User {
  id!: number;
  name!: string;
  username!: string;
  email!: string;
  image!: string;
  address: UserAddress = {} as UserAddress;
  phone!: string;
  website!: string;
  company: UserCompany = {} as UserCompany;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);

    // Initialize lat and lng in address.geo
    if (!this.address.geo) {
      this.address.geo = { lat: '', lng: '' };
    }
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
