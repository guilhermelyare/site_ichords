//Dados de conexão do firebase
var firebaseConfig = {
    apiKey: "AIzaSyB8NYYRnEYSRqyB8AJlDr3BYcigDdHtneM",
    authDomain: "dados-do-site-7e5ba.firebaseapp.com",
    databaseURL: "https://dados-do-site-7e5ba-default-rtdb.firebaseio.com",
    projectId: "dados-do-site-7e5ba",
    storageBucket: "dados-do-site-7e5ba.appspot.com",
    messagingSenderId: "897462020542",
    appId: "1:897462020542:web:f44de0966132693e9531ef"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();