export type City = {
  id: number;
  name: string;
  state_id: number;
};

export type CreateCityDTO = {
  name: string;
  state_id: number;
};

export type UpdateCityDTO = {
  name: string;
  state_id: number;
};
