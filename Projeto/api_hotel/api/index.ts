import { HotelRouter } from "./services/hotel/hotel.router";
import { ReservationRouter } from "./services/reservation/reservation.router";
import { RoomRouter } from "./services/room/room.router";
import { UserRouter } from "./services/user/user.router";
import express from "express";
import cors from "cors"

export const api = express();
const port = 8080;

api.use(cors());
api.use(express.json());
api.use("/user", UserRouter);
api.use("/hotel", HotelRouter);
api.use("/room", RoomRouter);
api.use("/reservation", ReservationRouter);

api.listen(port, () => {
    console.log("Service is on...");
  });
  