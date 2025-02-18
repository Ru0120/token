import mongoose from "mongoose";
import { comSchema } from "../schema/comSchema.js";
export const Com = mongoose.model("Com", comSchema);
