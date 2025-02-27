import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCsQprh5jGIk6AMp5icpIN29agwKXYAOd8",
  authDomain: "glad-skin-care.firebaseapp.com",
  projectId: "glad-skin-care",
  storageBucket: "glad-skin-care.appspot.com",
  messagingSenderId: "169743399259",
  appId: "1:169743399259:web:808f9d26498f37059f427e",
  measurementId: "G-SW3Z5S8CTD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };