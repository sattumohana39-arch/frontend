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
  apiKey: "AIzaSyA7qCKliNS1VeUJ98S_4Lr4djBsPf2JzEY",
  authDomain: "navypay.firebaseapp.com",
  projectId: "navypay",
  storageBucket: "navypay.firebasestorage.app",
  messagingSenderId: "1023578645785",
  appId: "1:1023578645785:web:fe47d969786b97cf721188",
  measurementId: "G-9HM84EMB45"
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
