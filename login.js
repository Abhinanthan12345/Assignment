// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj9ZoA7KPLCEXtBjrRjGxgvpgmyqnlSIw",
    authDomain: "html-7dd69.firebaseapp.com",
    projectId: "html-7dd69",
    storageBucket: "html-7dd69.appspot.com",
    messagingSenderId: "576364990659",
    appId: "1:576364990659:web:f02bd7227c63ec0cb99276",
    measurementId: "G-YL8KH762T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);

// Registration code
document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert("Registration successful!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

// Login code
document.getElementById("login").addEventListener("click", function () {
    var login_email = document.getElementById("login_email").value;
    var login_password = document.getElementById("login_password").value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, login_email, login_password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successful!");
            document.getElementById('logout').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

// Logout code
document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
    });
});

// Toggle between registration and login forms
document.getElementById("toggleForm").addEventListener("click", function () {
    const registrationForm = document.getElementById("registration_form");
    const loginForm = document.getElementById("login_form");

    if (registrationForm.style.display === "none") {
        registrationForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        registrationForm.style.display = "none";
        loginForm.style.display = "block";
    }
});
