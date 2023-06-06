import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCb6XY6hhiDzyrwMy1LqxIhEkilxuyc8Tk",
  authDomain: "uploadingpicture-29742.firebaseapp.com",
  projectId: "uploadingpicture-29742",
  storageBucket: "uploadingpicture-29742.appspot.com",
  messagingSenderId: "193259266787",
  appId: "1:193259266787:web:22db6afd4e036862c5dbd6"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);