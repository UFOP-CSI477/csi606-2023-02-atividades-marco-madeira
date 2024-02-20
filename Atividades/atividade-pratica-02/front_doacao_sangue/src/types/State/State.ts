export type State = {
  id: number;
  name: string;
  acronym: string;
  created_at: Date;
  updater_at: Date;
};

export type CreateStateDTO = {
  name: string;
  acronym: string;
};

export type UpdateStateDTO = {
  name: string;
  acronym: string;
  updater_at: Date;
};
