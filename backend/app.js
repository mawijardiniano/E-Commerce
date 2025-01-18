import express from 'express';
import db from './firebaseAdmin.js'; // Import Firestore from firebaseAdmin.js

const app = express();
app.use(express.json());

app.get('/test-firebase', (req, res) => {
  res.json("mawi");
});

app.get('/fetch-firestore-data', async (req, res) => {
  try {
    // Reference a document in Firestore using Admin SDK
    const docRef = db.collection('sample').doc('mBx0W8nqu8iCbO91UywN');
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Send the document data back in the response
    res.json({
      message: 'Document fetched successfully',
      data: docSnapshot.data(),
    });
  } catch (error) {
    console.error("Error fetching document:", error.message);
    res.status(500).json({
      message: 'Error fetching document',
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
