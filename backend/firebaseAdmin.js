import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!serviceAccount) {
  throw new Error("Service account key not found in environment variables");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://e-commerce-6d61d.firebaseio.com",
});

const db = admin.firestore();
const auth = admin.auth();

export default { db, auth };
