import { User } from "../models/user.model.js";

export const signUpUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const newUser = new User({ fullname, email, password });

    await newUser.save();

    console.log('signup api triggered');

    res.status(200).json({ message: "User registered succesfully", newUser });
  } catch (error) {
    console.log(error, "Error while signing up");
    res.status(500).json({ message: "Internal server error" });
  }
};




export const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("signin api triggered");

    res.status(200).json({ message: "User signed in successfully", user });
  } catch (error) {
    console.log(error, "Error while signing in");
    res.status(500).json({ message: "Internal server error" });
  }
};