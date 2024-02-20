export type BloodType = {
  id: number;
  type: string;
  factor: string;
  created_at: Date;
  updated_at: Date;
};

export type CreateBloodTypeDTO = {
  type: string;
  factor: string;
};

export type UpdateBloodTypeDTO = {
  type: string;
  factor: string;
  updated_at: Date;
};
