import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAwZCvNbnU5Ntx845mCtZ1EGUPcWgP6JY",
    authDomain: "luxemart-40793.firebaseapp.com",
    projectId: "luxemart-40793",
    storageBucket: "luxemart-40793.appspot.com",
    messagingSenderId: "889548933001",
    appId: "1:889548933001:web:c9cb44ea645cc49cfd0358",
    measurementId: "G-DRK441WR6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const database = firebase.database()

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Login Successfully");
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})

