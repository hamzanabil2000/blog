import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZ8ibQs3nqkPNiAkLr1CjF3yRgQGi-6PQ",
  authDomain: "blog-f726f.firebaseapp.com",
  projectId: "blog-f726f",
  storageBucket: "blog-f726f.appspot.com",
  messagingSenderId: "1031555136854",
  appId: "1:1031555136854:web:c00e995b36ee4dc472eaf7",
  measurementId: "G-TKGFE8MM9Z",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
