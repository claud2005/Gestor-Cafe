// Import the Firebase functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Configuração da tua app no Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCnqgaNdNqR6qVHv5YchW5tM7mWmVXMA3I",
  authDomain: "gestor-cafe.firebaseapp.com",
  projectId: "gestor-cafe",
  storageBucket: "gestor-cafe.appspot.com", // Certo agora
  messagingSenderId: "452670498523",
  appId: "1:452670498523:web:485ae5c08be0325452cefe",
  measurementId: "G-BQDJGP931J"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore (base de dados)
const db = getFirestore(app);

// Inicializar Analytics (apenas se suportado)
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized.");
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
});

// Exportar para usar noutros ficheiros
export { app, db };
