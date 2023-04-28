import { model, Schema, Types } from "mongoose";

interface House {
  accountId: Schema.Types.ObjectId;
  devices: Schema.Types.ObjectId[];
  notifications: Schema.Types.ObjectId[];
}

const houseSchema = new Schema<House>({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  devices: [{ type: Schema.Types.ObjectId, ref: "Device" }],
  notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
});

const HouseModel = model("House", houseSchema);
export default HouseModel;
