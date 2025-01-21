import db from '../firebaseAdmin.js';

import admin from 'firebase-admin';

export const createUser = async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'Missing required fields: name, email, age' });
  }

  try {
    const newUser = {
      name,
      email,
      age,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const userRef = await db.collection('users').add(newUser);
    res.status(201).json({ id: userRef.id, ...newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};


export const getUsers = async (req, res) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};
