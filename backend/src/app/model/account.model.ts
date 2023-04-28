import { model, Schema } from "mongoose";

interface Account {
  username: string;
  password: string;
}

const accountSchema = new Schema<Account>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AccountModel = model("Account", accountSchema);
export default AccountModel;
