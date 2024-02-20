export type Person = {
  id: number;
  name: string;
  street: string;
  number: string;
  additional: string;
  rg: string;
  city_id: number;
  blood_type_id: number;
  created_at: Date;
  updater_at: Date;
};

export type CreatePersonDTO = {
  name: string;
  street: string;
  number: string;
  additional: string;
  rg: string;
  city_id: number;
  blood_type_id: number;
};

export type UpdatePersonDTO = {
  name: string;
  street: string;
  number: string;
  additional: string;
  rg: string;
  city_id: number;
  blood_type_id: number;
  updater_at: Date;
};
