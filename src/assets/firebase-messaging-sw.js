// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyAQNh1grr366oN7RC-BzhUELDMI-XnYnX0",
    authDomain: "learn-jean.firebaseapp.com",
    projectId: "learn-jean",
    storageBucket: "learn-jean.appspot.com",
    messagingSenderId: "1000413520391",
    appId: "1:1000413520391:web:87531f67f8d54db67fc0a2",
    measurementId: "G-GZGXFW9739"
});

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();