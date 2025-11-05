importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: "AIzaSyDDGJ_ETSpgZvX7J-CtaFtQl5ldOhv1_kg",
  authDomain: "lunar-planet-440014-h3.firebaseapp.com",
  projectId: "lunar-planet-440014-h3",
  storageBucket: "lunar-planet-440014-h3.firebasestorage.app",
  messagingSenderId: "936861961273",
  appId: "1:936861961273:web:dd0dcdf6bda7c14cdad1e8",
  measurementId: "G-R2FJPDQ2FB"
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
