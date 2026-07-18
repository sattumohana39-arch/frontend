// ─── Firebase Client SDK (Google Auth) ──────────────
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7qCKliNS1VeUewPEKjIi3_GMLC-bMqdk",
  authDomain: "neocash.firebaseapp.com",
  projectId: "neocash",
  storageBucket: "neocash.firebasestorage.app",
  messagingSenderId: "652500574048",
  appId: "1:652500574048:web:da3d5e2b2c77b90f8af5ce",
  measurementId: "G-DBSWFVE7GG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Use local persistence to avoid third-party cookie issues
setPersistence(auth, browserLocalPersistence).catch(() => {});

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

/**
 * Trigger Google Sign-In popup and return the Firebase ID token.
 * Uses explicit browserPopupRedirectResolver to avoid
 * "Pending promise was never set" assertion failures.
 * @returns {Promise<{ idToken: string, email: string, displayName: string }>}
 */
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider, browserPopupRedirectResolver);
  const idToken = await result.user.getIdToken();
  return {
    idToken,
    email: result.user.email || '',
    displayName: result.user.displayName || '',
  };
};

/**
 * Sign out from Firebase (clears local Firebase session).
 */
export const signOutFirebase = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    // Ignore sign-out errors
  }
};

export default { signInWithGoogle, signOutFirebase };
