import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZQ8B4PVFeQTTVTXaLMSogxowHFZ9ddno",
  authDomain: "fir-authentication-973e5.firebaseapp.com",
  projectId: "fir-authentication-973e5",
  storageBucket: "fir-authentication-973e5.firebasestorage.app",
  messagingSenderId: "800101079061",
  appId: "1:800101079061:web:4d5de9d51d309cc4e4161c",
  measurementId: "G-LY5Y35GWYD"
};

const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});