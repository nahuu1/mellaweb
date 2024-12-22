import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCY1aYD1QaSxJzEZgoIlvAOgkOPvA5OUGY",
  authDomain: "mella-ad045.firebaseapp.com",
  databaseURL: "https://mella-ad045-default-rtdb.firebaseio.com",
  projectId: "mella-ad045",
  storageBucket: "mella-ad045.firebasestorage.app",
  messagingSenderId: "60402681356",
  appId: "1:60402681356:web:84ae536a349f7887b71029",
  measurementId: "G-PWFZ0TC0X5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
