import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import { isValidPassword } from "mongoose-custom-validators";

const userSchema = new mongoose.Schema({
  houseNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: isValidPassword,
      message:
        "Password must have at least: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
    },
  },
  contactInformation: {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value))
          throw new Error("Please input a valid email");
      },
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
