import firebase from "../firebaseAdmin.js";
const { db } = firebase;

export const Apply = async (req, res) => {
  try {
    const { shopname } = req.body;

    if (!shopname) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const NewSeller = { shopname };
    const sellerRef = await db.collection("sellers").add(NewSeller);

    res.status(201).json({ id: sellerRef.id, ...NewSeller });
  } catch (error) {
    console.error("Error creating seller:", error);
    res.status(500).json({ message: "Error creating seller", error: error.message });
  }
};
