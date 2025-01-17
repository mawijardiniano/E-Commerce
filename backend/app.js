import express from 'express';
import admin from './firebaseAdmin.js'; // Import Firebase Admin setup

const app = express();

app.use(express.json()); 


app.get('/test-firebase', async (req, res) => {
res.json("mawi")
});

app.get('/fetch-firestore-data', async (req, res) => {
    try {
      const docRef = admin.firestore().collection('sample').doc('mBx0W8nqu8iCbO91UywN');
      const docSnapshot = await docRef.get();
  
      if (!docSnapshot.exists) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
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
