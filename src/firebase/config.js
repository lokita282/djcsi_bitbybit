// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAWwHk9RTG-9LJyJErT0TI4EV4QHU_MPbM',
    authDomain: 'bitbybit-62cd0.firebaseapp.com',
    projectId: 'bitbybit-62cd0',
    storageBucket: 'bitbybit-62cd0.appspot.com',
    messagingSenderId: '236627406175',
    appId: '1:236627406175:web:2fed09402d62461f5f9aea'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
