import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from the current module URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Assuming the service account JSON file is in the 'config' folder
const serviceAccountPath = path.join(__dirname, 'config', 'serviceAccountKey.json');

if (!admin.apps.length) {
  try {
    // Read the service account JSON file and parse it
    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

    // Initialize Firebase Admin
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://e-commerce-6d61d.firebaseio.com',
    });

    console.log('Firebase Admin initialized successfully.');
  } catch (error) {
    console.error('Failed to initialize Firebase Admin:', error.message);
    process.exit(1); // Exit the process if initialization fails
  }
} else {
  admin.app(); // Use the already initialized app
}

export default admin;
