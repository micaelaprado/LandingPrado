import React from 'react';
import AppRouter from './AppRouter';
import "./App.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';

function App() {
  const db = getFirestore(firebaseApp);

  return <AppRouter />;
}

export default App;