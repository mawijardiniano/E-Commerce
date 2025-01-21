import  firebase  from '../firebaseAdmin.js';
const { db, auth } = firebase;
// Sign up a user
export const signUpUser = async (req, res) => {
  const { email, password, displayName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await auth.createUser({
      email,
      password,
      displayName,
    });

    res.status(201).json({
      message: 'User created successfully',
      user: { uid: user.uid, email: user.email, displayName: user.displayName },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Sign in a user (Verify token)
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

// Get user details by UID
export const getUser = async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await auth.getUser(uid);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: 'User not found', error: error.message });
  }
};
