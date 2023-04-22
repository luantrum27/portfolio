// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
// import "firebase/firestore";
// import {config} from 'dotenv'
// config()
// const firebaseConfig = {
//   apiKey: "AIzaSyABgOIaqqCV2gCWprFcVr5RD09y5lvD50o",
//   authDomain: "portfolio-d9079.firebaseapp.com",
//   projectId: "portfolio-d9079",
//   storageBucket: "portfolio-d9079.appspot.com",
//   messagingSenderId: "565951968085",
//   appId: "1:565951968085:web:ba50ac9c2ad21e620db5dc",
//   measurementId: "G-B3G0V1QK6T"
// };
const firebaseConfig = {
  apiKey: "AIzaSyABgOIaqqCV2gCWprFcVr5RD09y5lvD50o",
  authDomain: "portfolio-d9079.firebaseapp.com",
  databaseURL: "https://portfolio-d9079-default-rtdb.firebaseio.com",
  projectId: "portfolio-d9079",
  storageBucket: "portfolio-d9079.appspot.com",
  messagingSenderId: "565951968085",
  appId: "1:565951968085:web:162480a3a5f8fb9e0db5dc",
  measurementId: "G-DCC46V973D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

