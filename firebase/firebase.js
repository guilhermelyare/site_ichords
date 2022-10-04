//Dados de conexão do firebase
var firebaseConfig = {
    apiKey: "AIzaSyAmEeBSIBqyTfkKT5GzqGuEwgdmVr8X8gI",
    authDomain: "test-site-1a8fc.firebaseapp.com",
    projectId: "test-site-1a8fc",
    storageBucket: "test-site-1a8fc.appspot.com",
    messagingSenderId: "526867028130",
    appId: "1:526867028130:web:00e1f490477697422bdffb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();