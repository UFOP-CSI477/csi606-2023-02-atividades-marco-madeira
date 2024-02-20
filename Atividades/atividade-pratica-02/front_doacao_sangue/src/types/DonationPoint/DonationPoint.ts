export type DonationPoint = {
  id: number;
  name: string;
  street: string;
  number: string;
  additional: string;
  city_id: number;
  created_at: Date;
  updater_at: Date;
};

export type CreateDonationPointDTO = {
  name: string;
  street: string;
  number: string;
  additional: string;
  city_id: number;
};

export type UpdateDonationPointDTO = {
    name: string;
    street: string;
    number: string;
    additional: string;
    city_id: number;
    updater_at: Date;
}