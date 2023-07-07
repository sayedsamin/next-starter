export interface Hospital {
  hospitalId: string;
  name: string;
  description: string;
  phone: Array<string>;

  district: string;
  thana: string;
  area: string;

  bedsCount: string;
  hasIcu: string;
  hasHdu: string;
  hasNicu: string;

  imageUrl: string;

  lat: string;
  lng: string;
}
