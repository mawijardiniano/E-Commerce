import firebase from "../firebaseAdmin.js";
const { db, auth } = firebase;
import admin from "firebase-admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { name, email, password , address, phoneNumber} = req.body;

  if (!name || !email || !password || !address || !phoneNumber) {
    return res
      .status(400)
      .json({ message: "Missing required fields: name, email, age" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  try {
    const newUser = {
      name,
      email,
      password: hashedPassword,
      address,
      phoneNumber,
      birthday,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const userRef = await db.collection("users").add(newUser);
    res.status(201).json({ id: userRef.id, ...newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields: email or password" });
    }

    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const userDoc = await db.collection("users").where("email", "==", email).get();
    if (userDoc.empty) {
      return res.status(400).json({ message: "User not found in Firestore" });
    }

    const userData = userDoc.docs[0].data();
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { email: userData.email, userId: userDoc.docs[0].id },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      status: "ok",
      data: {
        token,
        userId: userDoc.docs[0].id,
        name: userData.name,
        email: userData.email,
      },
      message: "Login Successful",
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getUserLoggedin = async (req, res) => {
  try {
    console.log("Request received at /getLogged");

    const { userId } = req.user;
    console.log("User ID:", userId);

    const userDoc = await db.collection("users").doc(userId).get();

    if (!userDoc.exists) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const user = userDoc.data();
    console.log("User found:", user);

    res.json({
      id: userId,
      name: user.name,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      address: user.address,
      birthday: user.birthday,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error("Error in getUserLoggedin:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const { userId } = req.params; 
  const { name, email, gender, address, phoneNumber, birthday } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const userRef = db.collection("users").doc(userId);

    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (gender) updatedData.gender = gender;
    if (address) updatedData.address = address;
    if (phoneNumber) updatedData.phoneNumber = phoneNumber;
    if (birthday) updatedData.birthday = birthday;

    updatedData.updatedAt = admin.firestore.FieldValue.serverTimestamp();

    await userRef.update(updatedData);

    res.status(200).json({ message: "User updated successfully", updatedData });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};


