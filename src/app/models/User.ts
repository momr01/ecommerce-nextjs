import { Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (password: string) => {
        if (!password?.length || password.length < 5) {
          new Error("Password must be at least 5 characters.");
          return false;
        }

        // return password?.length || password.length > 5;
      },
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.post("validate", function (user) {
  const cleanPassword : string = user.password;
  const salt : string = bcrypt.genSaltSync(10);
  const hashedPassword: string = bcrypt.hashSync(cleanPassword, salt);

  user.password = hashedPassword;
});

export const User = models?.User || model("User", UserSchema);
