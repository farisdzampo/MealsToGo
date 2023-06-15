import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(email, password);
};
