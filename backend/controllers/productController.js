import firebase from "../firebaseAdmin.js";
const { db, auth } = firebase;

export const uploadProduct = async (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: "Please input all fields" });
  }

  try {
    const newProduct = {
      name,
      price,
      category,
    };
    const productRef = await db.collection('products').add(newProduct);
    res.status(201).json({ id: productRef.id, ...newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};
