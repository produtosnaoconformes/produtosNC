import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApTUTflwNDyTr6sTZeyrAf5f0Fj6k7y34",
  authDomain: "caixas-nc-belgo.firebaseapp.com",
  projectId: "caixas-nc-belgo",
  storageBucket: "caixas-nc-belgo.firebasestorage.app",
  messagingSenderId: "881047911574",
  appId: "1:881047911574:web:f62c01282214823e5b96b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.updateDoc = updateDoc;
window.deleteDoc = deleteDoc;
window.doc = doc;

globalThis.db = db;
globalThis.collection = collection;
globalThis.addDoc = addDoc;
globalThis.getDocs = getDocs;
window.firebaseDB = {
    db,
    collection,
    addDoc,
    getDocs
};

console.log("FIREBASE CARREGOU");
;

async function testeFirebase(){

    try{

        await addDoc(
            collection(db, "historico"),
            {
                acao: "TESTE FIREBASE",
                data: new Date().toLocaleString()
            }
        );

        console.log("DADO GRAVADO NO FIREBASE");

    }catch(erro){

        console.error("ERRO FIREBASE", erro);

    }

}

testeFirebase();
