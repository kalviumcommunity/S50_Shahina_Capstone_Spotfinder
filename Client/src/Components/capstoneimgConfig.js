import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7pBmETe_oPAMc5_P_yGgxe_RhgRdrE58",
  authDomain: "capstoneimg-deefd.firebaseapp.com",
  projectId: "capstoneimg-deefd",
  storageBucket: "capstoneimg-deefd.appspot.com",
  messagingSenderId: "1023154226971",
  appId: "1:1023154226971:web:da93edc8a08c00241235be",
  measurementId: "G-4VD28P6GGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);