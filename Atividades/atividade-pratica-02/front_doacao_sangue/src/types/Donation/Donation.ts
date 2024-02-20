export type Donation = {
  id: number;
  person_id: number;
  donation_point_id: number;
  created_at: Date;
  updater_at: Date;
};

export type CreateDonationDTO = {
  person_id: number;
  donation_point_id: number;
};

export type UpdateDonationDTO = {
  person_id: number;
  donation_point_id: number;
  updater_at: Date;
};
