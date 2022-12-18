import express from "express";
import { countByCity,countByType ,createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router();

//CREATE
//we are using async await because this process will take time to go to urls
router.post("/", verifyAdmin ,createHotel);

//UPDATE
router.put("/:id",verifyAdmin ,updateHotel)
//DELETE
router.delete("/:id", verifyAdmin ,deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms);

//exporting so that in other router we can get access 
export default router