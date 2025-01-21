'use client'

import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from '../app/firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleSignIn = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the code is running in the browser
    if (typeof window !== 'undefined') {
      setIsClient(true); // Set state to true when window is available
    }
  }, []);

  const handleGoogleSignIn = async () => {
    if (!isClient) return; // Ensure it's running in the browser

    try {
      // Perform Google Sign-In with popup
      const result = await signInWithPopup(auth, googleProvider);
      
      // Get user info
      const user = result.user;
      console.log('User Info:', user);

      // You can store user data in the state or global state (e.g., context, Redux)
      alert(`Welcome ${user.displayName}!`);
      
    } catch (error) {
      // Handle error and show user-friendly message
      console.error('Error signing in with Google:', error.message);
      alert('There was an issue signing in with Google. Please try again.');
    }
  };

  // Only render the button if it's a client-side environment
  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <button onClick={handleGoogleSignIn}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
