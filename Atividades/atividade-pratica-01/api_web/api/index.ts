import { stateRouter } from "./services/state/state.router";
import { cityRouter } from "./services/city/city.router";
import { bloodTypeRouter } from "./services/blood_type/blood_type.router";
import { personRouter } from "./services/person/person.router";
import { donationPointRouter } from "./services/donation_point/donation_point.router";
import { donationRouter } from "./services/donation/donation.router";


const express = require("express");
export const api = express();
const port = 8080;

api.use(express.json());
api.use("/state", stateRouter);
api.use("/city", cityRouter);
api.use("/bloodType", bloodTypeRouter);
api.use("/person", personRouter);
api.use("/donationPoint", donationPointRouter);
api.use("/donation", donationRouter);

api.listen(port, () => {
  console.log("Service is on...");
});

