import  firebase  from '../firebaseAdmin.js';
const { db, auth,admin } = firebase;


export const signUpUser = async (req, res) => {
  const { email, password, displayName } = req.body;

  if (!email || !password || !displayName) {
    return res.status(400).json({ message: 'Email, password, and display name are required' });
  }

  try {
    console.log('Creating user in Firebase Authentication...');
    const user = await auth.createUser({
      email,
      password,
      displayName,
    });

    console.log('User created successfully in Firebase Authentication:', user.uid);

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    console.log('Adding user to Firestore...');
    await db.collection('users').doc(user.uid).set(newUser);

    console.log('User added to Firestore:', newUser);

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Error occurred:', error);

    if (error.code === 'auth/email-already-exists') {
      return res.status(400).json({ message: 'Email already exists' });
    } else if (error.code === 'auth/invalid-password') {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    } else {
      return res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  }
};


export const signInUser = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    res.status(200).json({ message: 'User authenticated', user: decodedToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error: error.message });
  }
};

export const getUser = async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await auth.getUser(uid);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: 'User not found', error: error.message });
  }
};
