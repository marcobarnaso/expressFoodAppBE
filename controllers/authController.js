import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  const { houseNumber, name, lastName, password, email, phone } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    houseNumber,
    name,
    lastName,
    password,
    contactInformation: {
      email,
      phone,
    },
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      houseNumber: user.houseNumber,
      name: user.name,
      lastName: user.lastName,
      email: user.contactInformation.email,
      phone: user.contactInformation.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      houseNumber: user.houseNumber,
      name: user.name,
      lastName: user.lastName,
      email: user.contactInformation.email,
      phone: user.contactInformation.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};
export { registerUser, authUser };
