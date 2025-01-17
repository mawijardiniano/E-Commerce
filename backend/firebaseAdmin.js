import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Get the directory name from the current module URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if the FIREBASE_SERVICE_ACCOUNT_KEY environment variable is set
const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!admin.apps.length) {
  try {
    let serviceAccount;

    if (serviceAccountKey) {
      // If FIREBASE_SERVICE_ACCOUNT_KEY is provided as a JSON string, parse it
      serviceAccount = JSON.parse(serviceAccountKey);
    } else {
      // If not set, fall back to using the service account JSON file
      const serviceAccountPath = path.join(__dirname, 'config', 'serviceAccountKey.json');
      serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
    }

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
